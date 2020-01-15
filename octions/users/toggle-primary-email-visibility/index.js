const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const email = default_parse("email");
const visibility = default_parse("visibility");


const previews = [
]

const inputs = {
  token,
  email,
  visibility,
}


request(token, 
  "patch", 
  "/user/email/visibility", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });