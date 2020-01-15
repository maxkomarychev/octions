const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const comment_id = default_parse("comment_id");
const body = default_parse("body");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  comment_id,
  body,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/comments/{comment_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });