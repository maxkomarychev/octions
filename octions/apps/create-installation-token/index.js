const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const installation_id = default_parse("installation_id");
const repository_ids = parse_array("repository_ids");
const permissions = default_parse("permissions");


const previews = [
  "machine-man",
]

const inputs = {
  token,
  installation_id,
  repository_ids,
  permissions,
}


request(token, 
  "post", 
  "/app/installations/{installation_id}/access_tokens", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.status) {
      core.setOutput('status', result.status)
    }
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });