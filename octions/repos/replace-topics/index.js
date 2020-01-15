const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const names = parse_array("names");
const file_output = default_parse("file_output");


const previews = [
  "mercy",
]

const inputs = {
  token,
  owner,
  repo,
  names,
  file_output,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/topics", 
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