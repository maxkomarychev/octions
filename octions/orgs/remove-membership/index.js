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
  "delete", 
  "/orgs/{org}/memberships/{username}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });