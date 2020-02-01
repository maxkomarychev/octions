const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const team_slug = default_parse("team_slug");
const discussion_number = default_parse("discussion_number");
const comment_number = default_parse("comment_number");
const content = default_parse("content");
const per_page = default_parse("per_page");
const page = default_parse("page");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  org,
  team_slug,
  discussion_number,
  comment_number,
  content,
  per_page,
  page,
  file_output,
  custom_outputs,
}


request(token, 
  "get", 
  "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", 
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