const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const ref = default_parse("ref");
const task = default_parse("task");
const auto_merge = parse_boolean("auto_merge");
const required_contexts = parse_array("required_contexts");
const payload = default_parse("payload");
const environment = default_parse("environment");
const description = default_parse("description");
const transient_environment = parse_boolean("transient_environment");
const production_environment = parse_boolean("production_environment");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "ant-man",
]

const inputs = {
  token,
  owner,
  repo,
  ref,
  task,
  auto_merge,
  required_contexts,
  payload,
  environment,
  description,
  transient_environment,
  production_environment,
  file_output,
  custom_outputs,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/deployments", 
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