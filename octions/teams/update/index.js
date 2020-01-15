const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const name = default_parse("name");
const description = default_parse("description");
const privacy = default_parse("privacy");
const permission = default_parse("permission");
const parent_team_id = default_parse("parent_team_id");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  team_id,
  name,
  description,
  privacy,
  permission,
  parent_team_id,
  file_output,
}


request(token, 
  "patch", 
  "/teams/{team_id}", 
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