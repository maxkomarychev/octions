const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const last_read_at = default_parse("last_read_at");


const previews = [
]

const inputs = {
  token,
  last_read_at,
}


request(token, 
  "put", 
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