const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const event_type = default_parse("event_type");
const client_payload = default_parse("client_payload");


const previews = [
  "everest",
]

const inputs = {
  token,
  owner,
  repo,
  event_type,
  client_payload,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/dispatches", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });