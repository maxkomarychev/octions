const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const keyword = default_parse("keyword");
const language = default_parse("language");
const start_page = default_parse("start_page");
const sort = default_parse("sort");
const order = default_parse("order");


const previews = [
]

const inputs = {
  token,
  keyword,
  language,
  start_page,
  sort,
  order,
}


request(token, 
  "get", 
  "/legacy/repos/search/{keyword}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });