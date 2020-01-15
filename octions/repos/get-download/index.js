const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const download_id = default_parse("download_id");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  download_id,
  file_output,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/downloads/{download_id}", 
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