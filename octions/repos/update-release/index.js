const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const release_id = default_parse("release_id");
const tag_name = default_parse("tag_name");
const target_commitish = default_parse("target_commitish");
const name = default_parse("name");
const body = default_parse("body");
const draft = parse_boolean("draft");
const prerelease = parse_boolean("prerelease");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  release_id,
  tag_name,
  target_commitish,
  name,
  body,
  draft,
  prerelease,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/releases/{release_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.status) {
      core.setOutput('status', result.status)
    }
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });