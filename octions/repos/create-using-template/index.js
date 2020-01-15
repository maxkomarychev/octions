const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const template_owner = default_parse("template_owner");
const template_repo = default_parse("template_repo");
const owner = default_parse("owner");
const name = default_parse("name");
const description = default_parse("description");
const private = parse_boolean("private");
const file_output = default_parse("file_output");


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
  file_output,
}


request(token, 
  "post", 
  "/repos/{template_owner}/{template_repo}/generate", 
  previews,
  _.omit(inputs, ["token", "file_output", "custom_outputs"]),
  file_output,
  custom_outputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });