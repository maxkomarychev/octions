const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const direction = default_parse("direction");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  team_id,
  direction,
  per_page,
  page,
}


request(token, 
  "get", 
  "/teams/{team_id}/discussions", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });