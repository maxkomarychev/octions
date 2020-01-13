const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const path = default_parse("path");
const message = default_parse("message");
const sha = default_parse("sha");
const branch = default_parse("branch");
const committer = default_parse("committer");
const author = default_parse("author");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
});

requestWithAuth("delete /repos/{owner}/{repo}/contents/{path}", {
    token,
    owner,
    repo,
    path,
    message,
    sha,
    branch,
    committer,
    author,
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