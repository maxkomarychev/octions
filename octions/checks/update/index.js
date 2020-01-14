const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const check_run_id = default_parse("check_run_id");
const name = default_parse("name");
const details_url = default_parse("details_url");
const external_id = default_parse("external_id");
const started_at = default_parse("started_at");
const status = default_parse("status");
const conclusion = default_parse("conclusion");
const completed_at = default_parse("completed_at");
const output = default_parse("output");
const actions = parse_array("actions");


const previews = [
  "antiope",
]

const inputs = {
  token,
  owner,
  repo,
  check_run_id,
  name,
  details_url,
  external_id,
  started_at,
  status,
  conclusion,
  completed_at,
  output,
  actions,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/check-runs/{check_run_id}", 
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