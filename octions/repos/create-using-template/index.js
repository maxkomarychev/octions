const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const template_owner = default_parse("template_owner");
const template_repo = default_parse("template_repo");
const owner = default_parse("owner");
const name = default_parse("name");
const description = default_parse("description");
const private = parse_boolean("private");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "baptiste",
    ]
  } 
});

requestWithAuth("post /repos/{template_owner}/{template_repo}/generate", {
    token,
    template_owner,
    template_repo,
    owner,
    name,
    description,
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