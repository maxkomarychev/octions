const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const vcs_url = default_parse("vcs_url");
const vcs = default_parse("vcs");
const vcs_username = default_parse("vcs_username");
const vcs_password = default_parse("vcs_password");
const tfvc_project = default_parse("tfvc_project");


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
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/import", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.status) {
      core.setOutput('status', result.status)
    }
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });