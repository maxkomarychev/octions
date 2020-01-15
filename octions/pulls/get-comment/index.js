const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const comment_id = default_parse("comment_id");


const previews = [
  "comfort-fade",
  "squirrel-girl",
]

const inputs = {
  token,
  owner,
  repo,
  comment_id,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/pulls/comments/{comment_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });