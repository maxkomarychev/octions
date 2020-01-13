const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const title = default_parse("title");
const head = default_parse("head");
const base = default_parse("base");
const body = default_parse("body");
const maintainer_can_modify = parse_boolean("maintainer_can_modify");
const draft = parse_boolean("draft");


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

requestWithAuth("post /repos/{owner}/{repo}/pulls", {
    token,
    owner,
    repo,
    title,
    head,
    base,
    body,
    maintainer_can_modify,
    draft,
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