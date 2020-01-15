const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const comment_id = default_parse("comment_id");
const body = default_parse("body");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  comment_id,
  body,
  file_output,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", 
  previews,
  _.omit(inputs, ["token", "file_output"]),
  file_output,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });