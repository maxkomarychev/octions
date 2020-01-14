const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const deployment_id = default_parse("deployment_id");
const status_id = default_parse("status_id");


const previews = [
  "machine-man",
  "flash",
  "ant-man",
]

const inputs = {
  token,
  owner,
  repo,
  deployment_id,
  status_id,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}", 
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