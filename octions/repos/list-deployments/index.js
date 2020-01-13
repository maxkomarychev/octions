const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const sha = default_parse("sha");
const ref = default_parse("ref");
const task = default_parse("task");
const environment = default_parse("environment");
const per_page = default_parse("per_page");
const page = default_parse("page");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "ant-man",
    ]
  } 
});

requestWithAuth("get /repos/{owner}/{repo}/deployments", {
    token,
    owner,
    repo,
    sha,
    ref,
    task,
    environment,
    per_page,
    page,
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