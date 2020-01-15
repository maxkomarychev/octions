const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const release_id = default_parse("release_id");
const tag_name = default_parse("tag_name");
const target_commitish = default_parse("target_commitish");
const name = default_parse("name");
const body = default_parse("body");
const draft = parse_boolean("draft");
const prerelease = parse_boolean("prerelease");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  release_id,
  tag_name,
  target_commitish,
  name,
  body,
  draft,
  prerelease,
  file_output,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/releases/{release_id}", 
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