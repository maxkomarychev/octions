const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const branch = default_parse("branch");
const dismissal_restrictions = default_parse("dismissal_restrictions");
const dismiss_stale_reviews = parse_boolean("dismiss_stale_reviews");
const require_code_owner_reviews = parse_boolean("require_code_owner_reviews");
const required_approving_review_count = default_parse("required_approving_review_count");


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
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", 
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