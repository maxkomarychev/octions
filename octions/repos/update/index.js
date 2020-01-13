const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const name = default_parse("name");
const description = default_parse("description");
const homepage = default_parse("homepage");
const private = parse_boolean("private");
const visibility = default_parse("visibility");
const has_issues = parse_boolean("has_issues");
const has_projects = parse_boolean("has_projects");
const has_wiki = parse_boolean("has_wiki");
const is_template = parse_boolean("is_template");
const default_branch = default_parse("default_branch");
const allow_squash_merge = parse_boolean("allow_squash_merge");
const allow_merge_commit = parse_boolean("allow_merge_commit");
const allow_rebase_merge = parse_boolean("allow_rebase_merge");
const archived = parse_boolean("archived");


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

requestWithAuth("patch /repos/{owner}/{repo}", {
    token,
    owner,
    repo,
    name,
    description,
    homepage,
    private,
    visibility,
    has_issues,
    has_projects,
    has_wiki,
    is_template,
    default_branch,
    allow_squash_merge,
    allow_merge_commit,
    allow_rebase_merge,
    archived,
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