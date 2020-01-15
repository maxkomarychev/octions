const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const use_lfs = default_parse("use_lfs");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  use_lfs,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/import/lfs", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });