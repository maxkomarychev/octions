const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const org = default_parse("org");
const name = default_parse("name");
const description = default_parse("description");
const maintainers = parse_array("maintainers");
const repo_names = parse_array("repo_names");
const privacy = default_parse("privacy");
const permission = default_parse("permission");
const parent_team_id = default_parse("parent_team_id");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
});

requestWithAuth("post /orgs/{org}/teams", {
    token,
    org,
    name,
    description,
    maintainers,
    repo_names,
    privacy,
    permission,
    parent_team_id,
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