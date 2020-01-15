const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const tree_sha = default_parse("tree_sha");
const recursive = default_parse("recursive");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  tree_sha,
  recursive,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/git/trees/{tree_sha}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });