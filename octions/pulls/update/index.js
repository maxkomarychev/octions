const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const title = default_parse("title");
const body = default_parse("body");
const state = default_parse("state");
const base = default_parse("base");
const maintainer_can_modify = parse_boolean("maintainer_can_modify");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "shadow-cat",
      "sailor-v",
    ]
  } 
});

requestWithAuth("patch /repos/{owner}/{repo}/pulls/{pull_number}", {
    token,
    owner,
    repo,
    pull_number,
    title,
    body,
    state,
    base,
    maintainer_can_modify,
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