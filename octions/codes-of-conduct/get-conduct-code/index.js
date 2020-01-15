const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const key = default_parse("key");


const previews = [
  "scarlet-witch",
]

const inputs = {
  token,
  key,
}


request(token, 
  "get", 
  "/codes_of_conduct/{key}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });