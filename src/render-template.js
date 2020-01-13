const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const routes = require("@octokit/routes");
const methodToSpec = require("./openapi/method-to-spec");

handlebars.registerHelper("singleline", function(text) {
  return text.split("\n").join(" ");
});

handlebars.registerHelper("toUpperCase", function(str) {
  return str.toUpperCase();
});

const TEMPLATES_ROOT = process.argv[2];
const OUTPUT_ROOT = process.argv[3];
const CATALOG_PATH = process.argv[4];

if (!TEMPLATES_ROOT) {
  console.error("Templates root is not provided");
  process.exit(-1);
}

if (!OUTPUT_ROOT) {
  console.error("Output root is not provided");
  process.exit(-1);
}

if (!CATALOG_PATH) {
  console.error("Catalog path is not provided");
  process.exit(-1);
}

const API_GITHUB = "api.github.com";

const templates = fs
  .readdirSync(TEMPLATES_ROOT, { withFileTypes: true })
  .filter(file => file.isFile() && file.name.endsWith("handlebars"))
  .reduce((acc, current) => {
    const { name: output_name } = path.parse(current.name);
    const template_data = fs
      .readFileSync(path.join(TEMPLATES_ROOT, current.name))
      .toString();
    const template = handlebars.compile(template_data);
    return {
      [output_name]: template,
      ...acc
    };
  }, {});

const allPaths = routes[API_GITHUB].paths;

function compare(path, data) {
  try {
    const existingData = fs.readFileSync(path).toString();
    return existingData === data;
  } catch (error) {
    return false;
  }
}

function writeIfChanged(path, data) {
  if (compare(path, data)) {
    console.error("skipped", path);
  } else {
    console.error("written", path);
    fs.writeFileSync(path, data);
  }
}

const flatMethods = [];

for (const apiPath in allPaths) {
  console.error(apiPath);
  const pathPathData = allPaths[apiPath];
  for (const method in pathPathData) {
    const methodSpec = pathPathData[method];
    const actionRoot = path.join(OUTPUT_ROOT, methodSpec.operationId);
    fs.mkdirSync(actionRoot, {
      recursive: true
    });
    const spec = methodToSpec(method, apiPath, methodSpec);

    const view = {
      ...spec,
      package_name: spec.name
        .split(" ")
        .map(word => word.toLowerCase())
        .join("-"),
      name: methodSpec.summary,
      has_inputs: _.size(spec.inputs),
      has_outputs: _.size(spec.outputs),
      has_previews: _.size(spec.previews),
      method,
      path: apiPath,
      runs: {
        using: "node12",
        main: "index.js"
      },
      owner: "maxkomarychev",
      repo: "octions",
      oction_path: actionRoot,
      version: "master"
    };
    flatMethods.push(view);

    for (const template_name in templates) {
      const compiled = templates[template_name];
      const rendered = compiled(view);
      const outputPath = path.join(actionRoot, template_name);
      writeIfChanged(outputPath, rendered);
    }
  }
}

const byPrefix = _.groupBy(
  flatMethods,
  method => method.operationId.split("/")[0]
);
const catalogTemplate = handlebars.compile(
  fs.readFileSync(CATALOG_PATH).toString()
);
const catalogData = catalogTemplate({
  views: byPrefix
});

writeIfChanged("./CATALOG.md", catalogData);
