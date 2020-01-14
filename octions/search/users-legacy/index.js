const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const keyword = default_parse("keyword");
const start_page = default_parse("start_page");
const sort = default_parse("sort");
const order = default_parse("order");


const previews = [
]

const inputs = {
  token,
  keyword,
  start_page,
  sort,
  order,
}


request(token, 
  "get", 
  "/legacy/user/search/{keyword}", 
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