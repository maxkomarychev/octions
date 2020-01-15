const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const branch = default_parse("branch");
const dismissal_restrictions = default_parse("dismissal_restrictions");
const dismiss_stale_reviews = parse_boolean("dismiss_stale_reviews");
const require_code_owner_reviews = parse_boolean("require_code_owner_reviews");
const required_approving_review_count = default_parse("required_approving_review_count");
const file_output = default_parse("file_output");


const previews = [
  "luke-cage",
]

const inputs = {
  token,
  owner,
  repo,
  branch,
  dismissal_restrictions,
  dismiss_stale_reviews,
  require_code_owner_reviews,
  required_approving_review_count,
  file_output,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", 
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