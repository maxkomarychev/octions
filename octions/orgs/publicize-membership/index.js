const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const username = default_parse("username");


const previews = [
]

const inputs = {
  token,
  org,
  username,
}


request(token, 
  "put", 
  "/orgs/{org}/public_members/{username}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });