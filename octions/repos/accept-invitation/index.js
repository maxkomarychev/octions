const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const invitation_id = default_parse("invitation_id");


const previews = [
]

const inputs = {
  token,
  invitation_id,
}


request(token, 
  "patch", 
  "/user/repository_invitations/{invitation_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });