const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const hook_id = default_parse("hook_id");
const config = default_parse("config");
const events = parse_array("events");
const add_events = parse_array("add_events");
const remove_events = parse_array("remove_events");
const active = parse_boolean("active");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
});

requestWithAuth("patch /repos/{owner}/{repo}/hooks/{hook_id}", {
    token,
    owner,
    repo,
    hook_id,
    config,
    events,
    add_events,
    remove_events,
    active,
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