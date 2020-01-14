const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const sha = default_parse("sha");
const ref = default_parse("ref");
const task = default_parse("task");
const environment = default_parse("environment");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "ant-man",
]

const inputs = {
  token,
  owner,
  repo,
  sha,
  ref,
  task,
  environment,
  per_page,
  page,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/deployments", 
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