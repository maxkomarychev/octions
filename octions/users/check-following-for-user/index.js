const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const username = default_parse("username");
const target_user = default_parse("target_user");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  username,
  target_user,
  file_output,
}


request(token, 
  "get", 
  "/users/{username}/following/{target_user}", 
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