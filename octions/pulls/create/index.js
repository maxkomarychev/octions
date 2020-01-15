const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const title = default_parse("title");
const head = default_parse("head");
const base = default_parse("base");
const body = default_parse("body");
const maintainer_can_modify = parse_boolean("maintainer_can_modify");
const draft = parse_boolean("draft");
const file_output = default_parse("file_output");


const previews = [
  "shadow-cat",
  "sailor-v",
]

const inputs = {
  token,
  owner,
  repo,
  title,
  head,
  base,
  body,
  maintainer_can_modify,
  draft,
  file_output,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/pulls", 
  previews,
  _.omit(inputs, ["token", "file_output"]),
  file_output,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });