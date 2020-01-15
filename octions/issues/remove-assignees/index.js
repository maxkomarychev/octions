const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const issue_number = default_parse("issue_number");
const assignees = parse_array("assignees");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  issue_number,
  assignees,
}


request(token, 
  "delete", 
  "/repos/{owner}/{repo}/issues/{issue_number}/assignees", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });