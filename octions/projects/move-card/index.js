const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const card_id = default_parse("card_id");
const position = default_parse("position");
const column_id = default_parse("column_id");


const previews = [
  "inertia",
]

const inputs = {
  token,
  card_id,
  position,
  column_id,
}


request(token, 
  "post", 
  "/projects/columns/cards/{card_id}/moves", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });