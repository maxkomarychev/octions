const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const scopes = parse_array("scopes");
const note = default_parse("note");
const note_url = default_parse("note_url");
const client_id = default_parse("client_id");
const client_secret = default_parse("client_secret");
const fingerprint = default_parse("fingerprint");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
]

const inputs = {
  token,
  scopes,
  note,
  note_url,
  client_id,
  client_secret,
  fingerprint,
  file_output,
  custom_outputs,
}


request(token, 
  "post", 
  "/authorizations", 
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