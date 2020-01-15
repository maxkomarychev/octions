const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const tree = parse_array("tree");
const base_tree = default_parse("base_tree");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  tree,
  base_tree,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/git/trees", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });