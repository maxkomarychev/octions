const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const comment_id = default_parse("comment_id");
const body = default_parse("body");
const file_output = default_parse("file_output");


const previews = [
  "comfort-fade",
]

const inputs = {
  token,
  owner,
  repo,
  comment_id,
  body,
  file_output,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/pulls/comments/{comment_id}", 
  previews,
  _.omit(inputs, ["token", "file_output", "custom_outputs"]),
  file_output,
  custom_outputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });