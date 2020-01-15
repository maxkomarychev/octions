const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const gpg_key_id = default_parse("gpg_key_id");


const previews = [
]

const inputs = {
  token,
  gpg_key_id,
}


request(token, 
  "get", 
  "/user/gpg_keys/{gpg_key_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });