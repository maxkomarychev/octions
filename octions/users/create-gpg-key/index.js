const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const armored_public_key = default_parse("armored_public_key");


const previews = [
]

const inputs = {
  token,
  armored_public_key,
}


request(token, 
  "post", 
  "/user/gpg_keys", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });