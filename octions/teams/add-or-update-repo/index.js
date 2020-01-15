const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const owner = default_parse("owner");
const repo = default_parse("repo");
const permission = default_parse("permission");


const previews = [
]

const inputs = {
  token,
  team_id,
  owner,
  repo,
  permission,
}


request(token, 
  "put", 
  "/teams/{team_id}/repos/{owner}/{repo}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });