const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const code = default_parse("code");


const previews = [
  "fury",
]

const inputs = {
  token,
  code,
}


request(token, 
  "post", 
  "/app-manifests/{code}/conversions", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });