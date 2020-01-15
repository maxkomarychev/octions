const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const content = default_parse("content");
const encoding = default_parse("encoding");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  content,
  encoding,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/git/blobs", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });