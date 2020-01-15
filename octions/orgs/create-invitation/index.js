const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const invitee_id = default_parse("invitee_id");
const email = default_parse("email");
const role = default_parse("role");
const team_ids = parse_array("team_ids");


const previews = [
]

const inputs = {
  token,
  org,
  invitee_id,
  email,
  role,
  team_ids,
}


request(token, 
  "post", 
  "/orgs/{org}/invitations", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });