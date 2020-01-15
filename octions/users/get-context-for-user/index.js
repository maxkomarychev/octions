const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const username = default_parse("username");
const subject_type = default_parse("subject_type");
const subject_id = default_parse("subject_id");


const previews = [
]

const inputs = {
  token,
  username,
  subject_type,
  subject_id,
}


request(token, 
  "get", 
  "/users/{username}/hovercard", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });