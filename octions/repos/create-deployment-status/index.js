const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const deployment_id = default_parse("deployment_id");
const state = default_parse("state");
const target_url = default_parse("target_url");
const log_url = default_parse("log_url");
const description = default_parse("description");
const environment = default_parse("environment");
const environment_url = default_parse("environment_url");
const auto_inactive = parse_boolean("auto_inactive");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "flash",
  "ant-man",
]

const inputs = {
  token,
  owner,
  repo,
  deployment_id,
  state,
  target_url,
  log_url,
  description,
  environment,
  environment_url,
  auto_inactive,
  file_output,
  custom_outputs,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", 
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