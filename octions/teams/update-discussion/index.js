const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const discussion_number = default_parse("discussion_number");
const title = default_parse("title");
const body = default_parse("body");
const file_output = default_parse("file_output");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  team_id,
  discussion_number,
  title,
  body,
  file_output,
}


request(token, 
  "patch", 
  "/teams/{team_id}/discussions/{discussion_number}", 
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