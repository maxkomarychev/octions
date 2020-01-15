const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const scopes = parse_array("scopes");
const note = default_parse("note");
const note_url = default_parse("note_url");
const client_id = default_parse("client_id");
const client_secret = default_parse("client_secret");
const fingerprint = default_parse("fingerprint");


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
}


request(token, 
  "post", 
  "/authorizations", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });