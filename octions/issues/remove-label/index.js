const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const issue_number = default_parse("issue_number");
const name = default_parse("name");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  issue_number,
  name,
  file_output,
}


request(token, 
  "delete", 
  "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}", 
  previews,
  _.omit(inputs, ["token", "file_output"]),
  file_output,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });