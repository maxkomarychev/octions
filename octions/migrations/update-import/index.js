const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const vcs_username = default_parse("vcs_username");
const vcs_password = default_parse("vcs_password");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  vcs_username,
  vcs_password,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/import", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });