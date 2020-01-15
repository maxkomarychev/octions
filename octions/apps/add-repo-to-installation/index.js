const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const installation_id = default_parse("installation_id");
const repository_id = default_parse("repository_id");


const previews = [
  "machine-man",
]

const inputs = {
  token,
  installation_id,
  repository_id,
}


request(token, 
  "put", 
  "/user/installations/{installation_id}/repositories/{repository_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });