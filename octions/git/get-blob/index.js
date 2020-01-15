const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const file_sha = default_parse("file_sha");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  file_sha,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/git/blobs/{file_sha}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });