const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const column_id = default_parse("column_id");


const previews = [
  "inertia",
]

const inputs = {
  token,
  column_id,
}


request(token, 
  "get", 
  "/projects/columns/{column_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });