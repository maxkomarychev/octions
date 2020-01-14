const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
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
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/branches/{branch}/protection", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.status) {
      core.setOutput('status', result.status)
    }
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });