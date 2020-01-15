const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const hook_id = default_parse("hook_id");
const config = default_parse("config");
const events = parse_array("events");
const add_events = parse_array("add_events");
const remove_events = parse_array("remove_events");
const active = parse_boolean("active");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  hook_id,
  config,
  events,
  add_events,
  remove_events,
  active,
  file_output,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/hooks/{hook_id}", 
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