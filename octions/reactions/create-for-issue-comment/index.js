const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const comment_id = default_parse("comment_id");
const content = default_parse("content");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  owner,
  repo,
  comment_id,
  content,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });