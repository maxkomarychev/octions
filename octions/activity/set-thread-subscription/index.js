const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const thread_id = default_parse("thread_id");
const ignored = parse_boolean("ignored");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  thread_id,
  ignored,
  file_output,
}


request(token, 
  "put", 
  "/notifications/threads/{thread_id}/subscription", 
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