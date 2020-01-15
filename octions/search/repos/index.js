const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const q = default_parse("q");
const sort = default_parse("sort");
const order = default_parse("order");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "mercy",
]

const inputs = {
  token,
  q,
  sort,
  order,
  per_page,
  page,
}


request(token, 
  "get", 
  "/search/repositories", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });