const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const authorization_id = default_parse("authorization_id");
const scopes = parse_array("scopes");
const add_scopes = parse_array("add_scopes");
const remove_scopes = parse_array("remove_scopes");
const note = default_parse("note");
const note_url = default_parse("note_url");
const fingerprint = default_parse("fingerprint");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
});

requestWithAuth("patch /authorizations/{authorization_id}", {
    token,
    authorization_id,
    scopes,
    add_scopes,
    remove_scopes,
    note,
    note_url,
    fingerprint,
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