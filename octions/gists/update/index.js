const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const gist_id = default_parse("gist_id");
const description = default_parse("description");
const files = default_parse("files");


const previews = [
]

const inputs = {
  token,
  gist_id,
  description,
  files,
}


request(token, 
  "patch", 
  "/gists/{gist_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });