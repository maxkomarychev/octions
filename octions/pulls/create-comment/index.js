const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const body = default_parse("body");
const commit_id = default_parse("commit_id");
const path = default_parse("path");
const position = default_parse("position");
const side = default_parse("side");
const line = default_parse("line");
const start_line = default_parse("start_line");
const start_side = default_parse("start_side");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "comfort-fade",
    ]
  } 
});

requestWithAuth("post /repos/{owner}/{repo}/pulls/{pull_number}/comments", {
    token,
    owner,
    repo,
    pull_number,
    body,
    commit_id,
    path,
    position,
    side,
    line,
    start_line,
    start_side,
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