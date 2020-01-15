const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const reviewers = parse_array("reviewers");
const team_reviewers = parse_array("team_reviewers");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  reviewers,
  team_reviewers,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });