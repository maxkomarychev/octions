const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const auto_trigger_checks = parse_array("auto_trigger_checks");


const previews = [
  "antiope",
]

const inputs = {
  token,
  owner,
  repo,
  auto_trigger_checks,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/check-suites/preferences", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });