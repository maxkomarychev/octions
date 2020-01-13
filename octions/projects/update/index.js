const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const project_id = default_parse("project_id");
const name = default_parse("name");
const body = default_parse("body");
const state = default_parse("state");
const organization_permission = default_parse("organization_permission");
const private = parse_boolean("private");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "inertia",
    ]
  } 
});

requestWithAuth("patch /projects/{project_id}", {
    token,
    project_id,
    name,
    body,
    state,
    organization_permission,
    private,
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