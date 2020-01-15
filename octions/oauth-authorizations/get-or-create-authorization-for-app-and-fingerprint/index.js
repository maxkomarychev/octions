const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const client_id = default_parse("client_id");
const fingerprint = default_parse("fingerprint");
const client_secret = default_parse("client_secret");
const scopes = parse_array("scopes");
const note = default_parse("note");
const note_url = default_parse("note_url");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  client_id,
  fingerprint,
  client_secret,
  scopes,
  note,
  note_url,
  file_output,
}


request(token, 
  "put", 
  "/authorizations/clients/{client_id}/{fingerprint}", 
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