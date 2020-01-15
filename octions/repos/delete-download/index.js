const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const download_id = default_parse("download_id");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  download_id,
}


request(token, 
  "delete", 
  "/repos/{owner}/{repo}/downloads/{download_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });