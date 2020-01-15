const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const authorization_id = default_parse("authorization_id");


const previews = [
]

const inputs = {
  token,
  authorization_id,
}


request(token, 
  "get", 
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