const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const client_id = default_parse("client_id");
const access_token = default_parse("access_token");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "doctor-strange",
    ]
  } 
});

requestWithAuth("delete /applications/{client_id}/grant", {
    token,
    client_id,
    access_token,
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