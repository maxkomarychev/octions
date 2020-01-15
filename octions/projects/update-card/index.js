const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const card_id = default_parse("card_id");
const note = default_parse("note");
const archived = parse_boolean("archived");
const file_output = default_parse("file_output");


const previews = [
  "inertia",
]

const inputs = {
  token,
  card_id,
  note,
  archived,
  file_output,
}


request(token, 
  "patch", 
  "/projects/columns/cards/{card_id}", 
  previews,
  _.omit(inputs, ["token", "file_output"]),
  file_output,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });