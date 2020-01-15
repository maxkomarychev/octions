const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const migration_id = default_parse("migration_id");


const previews = [
  "wyandotte",
]

const inputs = {
  token,
  org,
  migration_id,
}


request(token, 
  "get", 
  "/orgs/{org}/migrations/{migration_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });