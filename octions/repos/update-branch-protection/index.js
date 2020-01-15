const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const branch = default_parse("branch");
const required_status_checks = default_parse("required_status_checks");
const enforce_admins = parse_boolean("enforce_admins");
const required_pull_request_reviews = default_parse("required_pull_request_reviews");
const restrictions = default_parse("restrictions");
const required_linear_history = parse_boolean("required_linear_history");
const allow_force_pushes = parse_boolean("allow_force_pushes");
const allow_deletions = parse_boolean("allow_deletions");
const file_output = default_parse("file_output");


const previews = [
  "luke-cage",
]

const inputs = {
  token,
  owner,
  repo,
  branch,
  required_status_checks,
  enforce_admins,
  required_pull_request_reviews,
  restrictions,
  required_linear_history,
  allow_force_pushes,
  allow_deletions,
  file_output,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/branches/{branch}/protection", 
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