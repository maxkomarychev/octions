const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const thread_id = default_parse("thread_id");


const previews = [
]

const inputs = {
  token,
  thread_id,
}


request(token, 
  "delete", 
  "/notifications/threads/{thread_id}/subscription", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });