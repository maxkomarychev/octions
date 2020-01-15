const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const comment_id = default_parse("comment_id");
const content = default_parse("content");
const per_page = default_parse("per_page");
const page = default_parse("page");
const file_output = default_parse("file_output");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  owner,
  repo,
  comment_id,
  content,
  per_page,
  page,
  file_output,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/comments/{comment_id}/reactions", 
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