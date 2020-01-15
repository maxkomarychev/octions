const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const scim_user_id = default_parse("scim_user_id");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  org,
  scim_user_id,
  file_output,
}


request(token, 
  "put", 
  "/scim/v2/organizations/{org}/Users/{scim_user_id}", 
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