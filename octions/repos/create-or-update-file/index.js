const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const path = default_parse("path");
const message = default_parse("message");
const content = default_parse("content");
const sha = default_parse("sha");
const branch = default_parse("branch");
const committer = default_parse("committer");
const author = default_parse("author");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  path,
  message,
  content,
  sha,
  branch,
  committer,
  author,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/contents/{path}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });