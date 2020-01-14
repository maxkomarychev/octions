const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const tag = default_parse("tag");
const message = default_parse("message");
const object = default_parse("object");
const type = default_parse("type");
const tagger = default_parse("tagger");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  tag,
  message,
  object,
  type,
  tagger,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/git/tags", 
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