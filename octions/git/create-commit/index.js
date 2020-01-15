const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const message = default_parse("message");
const tree = default_parse("tree");
const parents = parse_array("parents");
const author = default_parse("author");
const committer = default_parse("committer");
const signature = default_parse("signature");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  message,
  tree,
  parents,
  author,
  committer,
  signature,
  file_output,
  custom_outputs,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/git/commits", 
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