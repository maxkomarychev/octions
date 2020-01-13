const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const team_id = default_parse("team_id");
const discussion_number = default_parse("discussion_number");
const comment_number = default_parse("comment_number");
const body = default_parse("body");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "squirrel-girl",
    ]
  } 
});

requestWithAuth("patch /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", {
    token,
    team_id,
    discussion_number,
    comment_number,
    body,
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