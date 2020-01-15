const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const branch = default_parse("branch");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  branch,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });