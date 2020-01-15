const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const client_id = default_parse("client_id");
const access_token = default_parse("access_token");
const file_output = default_parse("file_output");


const previews = [
  "doctor-strange",
]

const inputs = {
  token,
  client_id,
  access_token,
  file_output,
}


request(token, 
  "delete", 
  "/applications/{client_id}/token", 
  previews,
  _.omit(inputs, ["token", "file_output"]),
  file_output,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });