const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const state = default_parse("state");
const sort = default_parse("sort");
const direction = default_parse("direction");
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
  state,
  sort,
  direction,
  per_page,
  page,
  file_output,
  custom_outputs,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/milestones", 
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