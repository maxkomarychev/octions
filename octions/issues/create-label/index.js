const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const name = default_parse("name");
const color = default_parse("color");
const description = default_parse("description");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  name,
  color,
  description,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/labels", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });