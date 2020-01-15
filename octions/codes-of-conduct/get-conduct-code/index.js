const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const key = default_parse("key");
const file_output = default_parse("file_output");


const previews = [
  "scarlet-witch",
]

const inputs = {
  token,
  key,
  file_output,
}


request(token, 
  "get", 
  "/codes_of_conduct/{key}", 
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