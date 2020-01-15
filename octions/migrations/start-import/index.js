const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const vcs_url = default_parse("vcs_url");
const vcs = default_parse("vcs");
const vcs_username = default_parse("vcs_username");
const vcs_password = default_parse("vcs_password");
const tfvc_project = default_parse("tfvc_project");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  vcs_url,
  vcs,
  vcs_username,
  vcs_password,
  tfvc_project,
  file_output,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/import", 
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