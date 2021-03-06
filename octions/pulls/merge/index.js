const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const commit_title = default_parse("commit_title");
const commit_message = default_parse("commit_message");
const sha = default_parse("sha");
const merge_method = default_parse("merge_method");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  commit_title,
  commit_message,
  sha,
  merge_method,
  file_output,
  custom_outputs,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/pulls/{pull_number}/merge", 
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