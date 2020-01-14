const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const visibility = default_parse("visibility");
const affiliation = default_parse("affiliation");
const type = default_parse("type");
const sort = default_parse("sort");
const direction = default_parse("direction");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
]

const inputs = {
  token,
  visibility,
  affiliation,
  type,
  sort,
  direction,
  per_page,
  page,
}


request(token, 
  "get", 
  "/user/repos", 
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