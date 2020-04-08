const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const installation_id = default_parse("installation_id");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "machine-man",
]

const inputs = {
  token,
  installation_id,
  file_output,
  custom_outputs,
}


request(token, 
  "delete", 
  "/app/installations/{installation_id}", 
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