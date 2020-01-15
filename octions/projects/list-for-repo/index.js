const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const state = default_parse("state");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "inertia",
]

const inputs = {
  token,
  owner,
  repo,
  state,
  per_page,
  page,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/projects", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });