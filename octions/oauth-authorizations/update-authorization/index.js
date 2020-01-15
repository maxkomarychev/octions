const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const authorization_id = default_parse("authorization_id");
const scopes = parse_array("scopes");
const add_scopes = parse_array("add_scopes");
const remove_scopes = parse_array("remove_scopes");
const note = default_parse("note");
const note_url = default_parse("note_url");
const fingerprint = default_parse("fingerprint");


const previews = [
]

const inputs = {
  token,
  authorization_id,
  scopes,
  add_scopes,
  remove_scopes,
  note,
  note_url,
  fingerprint,
}


request(token, 
  "patch", 
  "/authorizations/{authorization_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });