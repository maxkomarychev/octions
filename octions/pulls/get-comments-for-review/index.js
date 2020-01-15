const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const review_id = default_parse("review_id");
const per_page = default_parse("per_page");
const page = default_parse("page");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  review_id,
  per_page,
  page,
  file_output,
  custom_outputs,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", 
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