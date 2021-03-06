const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const column_id = default_parse("column_id");
const note = default_parse("note");
const content_id = default_parse("content_id");
const content_type = default_parse("content_type");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "inertia",
]

const inputs = {
  token,
  column_id,
  note,
  content_id,
  content_type,
  file_output,
  custom_outputs,
}


request(token, 
  "post", 
  "/projects/columns/{column_id}/cards", 
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