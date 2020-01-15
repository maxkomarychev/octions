const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const migration_id = default_parse("migration_id");
const repo_name = default_parse("repo_name");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "wyandotte",
]

const inputs = {
  token,
  migration_id,
  repo_name,
  file_output,
  custom_outputs,
}


request(token, 
  "delete", 
  "/user/migrations/{migration_id}/repos/{repo_name}/lock", 
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