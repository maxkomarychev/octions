const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const milestone = default_parse("milestone");
const state = default_parse("state");
const assignee = default_parse("assignee");
const creator = default_parse("creator");
const mentioned = default_parse("mentioned");
const labels = default_parse("labels");
const sort = default_parse("sort");
const direction = default_parse("direction");
const since = default_parse("since");
const per_page = default_parse("per_page");
const page = default_parse("page");
const file_output = default_parse("file_output");


const previews = [
  "machine-man",
  "squirrel-girl",
]

const inputs = {
  token,
  owner,
  repo,
  milestone,
  state,
  assignee,
  creator,
  mentioned,
  labels,
  sort,
  direction,
  since,
  per_page,
  page,
  file_output,
}


request(token, 
  "get", 
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