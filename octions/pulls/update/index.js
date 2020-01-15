const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const title = default_parse("title");
const body = default_parse("body");
const state = default_parse("state");
const base = default_parse("base");
const maintainer_can_modify = parse_boolean("maintainer_can_modify");
const file_output = default_parse("file_output");


const previews = [
  "shadow-cat",
  "sailor-v",
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  title,
  body,
  state,
  base,
  maintainer_can_modify,
  file_output,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/pulls/{pull_number}", 
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