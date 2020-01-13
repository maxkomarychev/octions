const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const name = default_parse("name");
const description = default_parse("description");
const homepage = default_parse("homepage");
const private = parse_boolean("private");
const visibility = default_parse("visibility");
const has_issues = parse_boolean("has_issues");
const has_projects = parse_boolean("has_projects");
const has_wiki = parse_boolean("has_wiki");
const is_template = parse_boolean("is_template");
const team_id = default_parse("team_id");
const auto_init = parse_boolean("auto_init");
const gitignore_template = default_parse("gitignore_template");
const license_template = default_parse("license_template");
const allow_squash_merge = parse_boolean("allow_squash_merge");
const allow_merge_commit = parse_boolean("allow_merge_commit");
const allow_rebase_merge = parse_boolean("allow_rebase_merge");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "nebula",
      "baptiste",
    ]
  } 
});

requestWithAuth("post /user/repos", {
    token,
    name,
    description,
    homepage,
    private,
    visibility,
    has_issues,
    has_projects,
    has_wiki,
    is_template,
    team_id,
    auto_init,
    gitignore_template,
    license_template,
    allow_squash_merge,
    allow_merge_commit,
    allow_rebase_merge,
})
  .then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.data && result.data.status) {
      core.setOutput('status', result.data.status)
    }
    core.setOutput('status', result.status)
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });