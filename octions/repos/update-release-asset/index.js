const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const asset_id = default_parse("asset_id");
const name = default_parse("name");
const label = default_parse("label");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  asset_id,
  name,
  label,
  file_output,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/releases/assets/{asset_id}", 
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