const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const content_reference_id = default_parse("content_reference_id");
const title = default_parse("title");
const body = default_parse("body");
const file_output = default_parse("file_output");


const previews = [
  "corsair",
]

const inputs = {
  token,
  content_reference_id,
  title,
  body,
  file_output,
}


request(token, 
  "post", 
  "/content_references/{content_reference_id}/attachments", 
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