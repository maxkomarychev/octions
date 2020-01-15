const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const check_suite_id = default_parse("check_suite_id");


const previews = [
  "antiope",
]

const inputs = {
  token,
  owner,
  repo,
  check_suite_id,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/check-suites/{check_suite_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });