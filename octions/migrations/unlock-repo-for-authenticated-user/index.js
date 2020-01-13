const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const migration_id = default_parse("migration_id");
const repo_name = default_parse("repo_name");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "wyandotte",
    ]
  } 
});

requestWithAuth("delete /user/migrations/{migration_id}/repos/{repo_name}/lock", {
    token,
    migration_id,
    repo_name,
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