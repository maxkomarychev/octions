const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const card_id = default_parse("card_id");
const note = default_parse("note");
const archived = parse_boolean("archived");


const previews = [
  "inertia",
]

const inputs = {
  token,
  card_id,
  note,
  archived,
}


request(token, 
  "patch", 
  "/projects/columns/cards/{card_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });