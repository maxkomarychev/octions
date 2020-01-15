const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const all = default_parse("all");
const participating = default_parse("participating");
const since = default_parse("since");
const before = default_parse("before");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  all,
  participating,
  since,
  before,
  per_page,
  page,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/notifications", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });