const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const ref = default_parse("ref");
const task = default_parse("task");
const auto_merge = parse_boolean("auto_merge");
const required_contexts = parse_array("required_contexts");
const payload = default_parse("payload");
const environment = default_parse("environment");
const description = default_parse("description");
const transient_environment = parse_boolean("transient_environment");
const production_environment = parse_boolean("production_environment");


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

requestWithAuth("post /repos/{owner}/{repo}/deployments", {
    token,
    owner,
    repo,
    ref,
    task,
    auto_merge,
    required_contexts,
    payload,
    environment,
    description,
    transient_environment,
    production_environment,
})
  .then(result => {
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