const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const app_slug = default_parse("app_slug");


const previews = [
  "machine-man",
]

const inputs = {
  token,
  app_slug,
}


request(token, 
  "get", 
  "/apps/{app_slug}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });