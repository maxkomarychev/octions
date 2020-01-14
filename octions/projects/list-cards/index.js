const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const column_id = default_parse("column_id");
const archived_state = default_parse("archived_state");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "inertia",
]

const inputs = {
  token,
  column_id,
  archived_state,
  per_page,
  page,
}


request(token, 
  "get", 
  "/projects/columns/{column_id}/cards", 
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