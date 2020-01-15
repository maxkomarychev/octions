const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const scim_user_id = default_parse("scim_user_id");


const previews = [
]

const inputs = {
  token,
  org,
  scim_user_id,
}


request(token, 
  "patch", 
  "/scim/v2/organizations/{org}/Users/{scim_user_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });