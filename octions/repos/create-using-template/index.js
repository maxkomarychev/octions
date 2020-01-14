const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const template_owner = default_parse("template_owner");
const template_repo = default_parse("template_repo");
const owner = default_parse("owner");
const name = default_parse("name");
const description = default_parse("description");
const private = parse_boolean("private");


const previews = [
  "baptiste",
]

const inputs = {
  token,
  template_owner,
  template_repo,
  owner,
  name,
  description,
  private,
}


request(token, 
  "post", 
  "/repos/{template_owner}/{template_repo}/generate", 
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