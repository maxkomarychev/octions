const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const commit_title = default_parse("commit_title");
const commit_message = default_parse("commit_message");
const sha = default_parse("sha");
const merge_method = default_parse("merge_method");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
});

requestWithAuth("put /repos/{owner}/{repo}/pulls/{pull_number}/merge", {
    token,
    owner,
    repo,
    pull_number,
    commit_title,
    commit_message,
    sha,
    merge_method,
})
  .then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.data && result.data.status) {
      core.setOutput('status', result.data.status)
    }
    core.setOutput('status', result.status)
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });