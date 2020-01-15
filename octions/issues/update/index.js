const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const issue_number = default_parse("issue_number");
const title = default_parse("title");
const body = default_parse("body");
const assignee = default_parse("assignee");
const state = default_parse("state");
const milestone = default_parse("milestone");
const labels = parse_array("labels");
const assignees = parse_array("assignees");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  issue_number,
  title,
  body,
  assignee,
  state,
  milestone,
  labels,
  assignees,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/issues/{issue_number}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });