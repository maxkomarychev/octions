const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const text = default_parse("text");
const mode = default_parse("mode");
const context = default_parse("context");


const previews = [
]

const inputs = {
  token,
  text,
  mode,
  context,
}


request(token, 
  "post", 
  "/markdown", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });