const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repository = default_parse("repository");
const state = default_parse("state");
const keyword = default_parse("keyword");


const previews = [
]

const inputs = {
  token,
  owner,
  repository,
  state,
  keyword,
}


request(token, 
  "get", 
  "/legacy/issues/search/{owner}/{repository}/{state}/{keyword}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });