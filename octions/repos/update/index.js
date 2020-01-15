const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

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
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "nebula",
  "baptiste",
]

const inputs = {
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
  file_output,
  custom_outputs,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}", 
  previews,
  _.omit(inputs, ["token", "file_output", "custom_outputs"]),
  file_output,
  custom_outputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });