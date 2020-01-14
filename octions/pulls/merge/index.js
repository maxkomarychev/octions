const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const commit_title = default_parse("commit_title");
const commit_message = default_parse("commit_message");
const sha = default_parse("sha");
const merge_method = default_parse("merge_method");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  commit_title,
  commit_message,
  sha,
  merge_method,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/pulls/{pull_number}/merge", 
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