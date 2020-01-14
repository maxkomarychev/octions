const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const comment_id = default_parse("comment_id");
const content = default_parse("content");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  owner,
  repo,
  comment_id,
  content,
  per_page,
  page,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/comments/{comment_id}/reactions", 
  previews,
  inputs,
).then(result => {
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