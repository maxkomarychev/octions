const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const title = default_parse("title");
const key = default_parse("key");
const read_only = parse_boolean("read_only");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  title,
  key,
  read_only,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/keys", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });