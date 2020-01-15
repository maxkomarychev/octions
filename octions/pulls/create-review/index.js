const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const commit_id = default_parse("commit_id");
const body = default_parse("body");
const event = default_parse("event");
const comments = parse_array("comments");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  commit_id,
  body,
  event,
  comments,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/pulls/{pull_number}/reviews", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });