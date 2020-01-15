const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const project_id = default_parse("project_id");
const name = default_parse("name");
const body = default_parse("body");
const state = default_parse("state");
const organization_permission = default_parse("organization_permission");
const private = parse_boolean("private");


const previews = [
  "inertia",
]

const inputs = {
  token,
  project_id,
  name,
  body,
  state,
  organization_permission,
  private,
}


request(token, 
  "patch", 
  "/projects/{project_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });