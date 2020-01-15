const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const tag_sha = default_parse("tag_sha");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  tag_sha,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/git/tags/{tag_sha}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });