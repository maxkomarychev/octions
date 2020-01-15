const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const credential_id = default_parse("credential_id");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  org,
  credential_id,
  file_output,
}


request(token, 
  "delete", 
  "/orgs/{org}/credential-authorizations/{credential_id}", 
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