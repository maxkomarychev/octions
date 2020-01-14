const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const filter = default_parse("filter");
const role = default_parse("role");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
]

const inputs = {
  token,
  org,
  filter,
  role,
  per_page,
  page,
}


request(token, 
  "get", 
  "/orgs/{org}/members", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.status) {
      core.setOutput('status', result.status)
    }
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });