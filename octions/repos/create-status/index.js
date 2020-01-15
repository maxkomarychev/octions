const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const sha = default_parse("sha");
const state = default_parse("state");
const target_url = default_parse("target_url");
const description = default_parse("description");
const context = default_parse("context");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  sha,
  state,
  target_url,
  description,
  context,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/statuses/{sha}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });