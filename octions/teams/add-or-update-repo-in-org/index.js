const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const team_slug = default_parse("team_slug");
const owner = default_parse("owner");
const repo = default_parse("repo");
const permission = default_parse("permission");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
]

const inputs = {
  token,
  org,
  team_slug,
  owner,
  repo,
  permission,
  file_output,
  custom_outputs,
}


request(token, 
  "put", 
  "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", 
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