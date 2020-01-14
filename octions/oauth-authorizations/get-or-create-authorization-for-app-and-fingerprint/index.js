const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const client_id = default_parse("client_id");
const fingerprint = default_parse("fingerprint");
const client_secret = default_parse("client_secret");
const scopes = parse_array("scopes");
const note = default_parse("note");
const note_url = default_parse("note_url");


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
}


request(token, 
  "put", 
  "/authorizations/clients/{client_id}/{fingerprint}", 
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