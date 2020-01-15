const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const cname = default_parse("cname");
const source = default_parse("source");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  cname,
  source,
}


request(token, 
  "put", 
  "/repos/{owner}/{repo}/pages", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });