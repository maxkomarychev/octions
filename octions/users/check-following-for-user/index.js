const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const username = default_parse("username");
const target_user = default_parse("target_user");


const previews = [
]

const inputs = {
  token,
  username,
  target_user,
}


request(token, 
  "get", 
  "/users/{username}/following/{target_user}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });