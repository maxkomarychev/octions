const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const project_id = default_parse("project_id");
const affiliation = default_parse("affiliation");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "inertia",
]

const inputs = {
  token,
  project_id,
  affiliation,
  per_page,
  page,
}


request(token, 
  "get", 
  "/projects/{project_id}/collaborators", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });