const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const base = default_parse("base");
const head = default_parse("head");
const commit_message = default_parse("commit_message");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  base,
  head,
  commit_message,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/merges", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });