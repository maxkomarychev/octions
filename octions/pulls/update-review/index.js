const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const review_id = default_parse("review_id");
const body = default_parse("body");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  review_id,
  body,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });