const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const discussion_number = default_parse("discussion_number");
const comment_number = default_parse("comment_number");
const content = default_parse("content");
const per_page = default_parse("per_page");
const page = default_parse("page");
const file_output = default_parse("file_output");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  team_id,
  discussion_number,
  comment_number,
  content,
  per_page,
  page,
  file_output,
}


request(token, 
  "get", 
  "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", 
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