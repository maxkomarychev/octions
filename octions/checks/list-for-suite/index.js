const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const check_suite_id = default_parse("check_suite_id");
const check_name = default_parse("check_name");
const status = default_parse("status");
const filter = default_parse("filter");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "antiope",
]

const inputs = {
  token,
  owner,
  repo,
  check_suite_id,
  check_name,
  status,
  filter,
  per_page,
  page,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", 
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