const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const head_sha = default_parse("head_sha");
const file_output = default_parse("file_output");


const previews = [
  "antiope",
]

const inputs = {
  token,
  owner,
  repo,
  head_sha,
  file_output,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/check-suites", 
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