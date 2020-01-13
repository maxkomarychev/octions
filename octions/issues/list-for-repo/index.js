const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const milestone = default_parse("milestone");
const state = default_parse("state");
const assignee = default_parse("assignee");
const creator = default_parse("creator");
const mentioned = default_parse("mentioned");
const labels = default_parse("labels");
const sort = default_parse("sort");
const direction = default_parse("direction");
const since = default_parse("since");
const per_page = default_parse("per_page");
const page = default_parse("page");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "machine-man",
      "squirrel-girl",
    ]
  } 
});

requestWithAuth("get /repos/{owner}/{repo}/issues", {
    token,
    owner,
    repo,
    milestone,
    state,
    assignee,
    creator,
    mentioned,
    labels,
    sort,
    direction,
    since,
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
    if (result && result.status) {
      core.setOutput('status', result.status)
    }
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });