const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const limit = default_parse("limit");


const previews = [
  "sombra",
]

const inputs = {
  token,
  org,
  limit,
}


request(token, 
  "put", 
  "/orgs/{org}/interaction-limits", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });