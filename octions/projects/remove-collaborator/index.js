const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const project_id = default_parse("project_id");
const username = default_parse("username");
const file_output = default_parse("file_output");


const previews = [
  "inertia",
]

const inputs = {
  token,
  project_id,
  username,
  file_output,
}


request(token, 
  "delete", 
  "/projects/{project_id}/collaborators/{username}", 
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