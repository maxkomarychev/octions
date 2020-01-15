const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const app_slug = default_parse("app_slug");
const file_output = default_parse("file_output");


const previews = [
  "machine-man",
]

const inputs = {
  token,
  app_slug,
  file_output,
}


request(token, 
  "get", 
  "/apps/{app_slug}", 
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