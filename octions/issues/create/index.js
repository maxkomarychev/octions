const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const title = default_parse("title");
const body = default_parse("body");
const assignee = default_parse("assignee");
const milestone = default_parse("milestone");
const labels = parse_array("labels");
const assignees = parse_array("assignees");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  title,
  body,
  assignee,
  milestone,
  labels,
  assignees,
  file_output,
  custom_outputs,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/issues", 
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