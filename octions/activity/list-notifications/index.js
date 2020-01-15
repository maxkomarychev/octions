const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const all = default_parse("all");
const participating = default_parse("participating");
const since = default_parse("since");
const before = default_parse("before");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
]

const inputs = {
  token,
  all,
  participating,
  since,
  before,
  per_page,
  page,
}


request(token, 
  "get", 
  "/notifications", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });