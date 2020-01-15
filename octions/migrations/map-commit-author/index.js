const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const author_id = default_parse("author_id");
const email = default_parse("email");
const name = default_parse("name");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  author_id,
  email,
  name,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/import/authors/{author_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });