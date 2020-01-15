const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const type = default_parse("type");
const sort = default_parse("sort");
const direction = default_parse("direction");
const per_page = default_parse("per_page");
const page = default_parse("page");
const file_output = default_parse("file_output");


const previews = [
  "nebula",
  "baptiste",
]

const inputs = {
  token,
  org,
  type,
  sort,
  direction,
  per_page,
  page,
  file_output,
}


request(token, 
  "get", 
  "/orgs/{org}/repos", 
  previews,
  _.omit(inputs, ["token", "file_output", "custom_outputs"]),
  file_output,
  custom_outputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });