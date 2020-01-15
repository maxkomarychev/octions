const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const name = default_parse("name");
const email = default_parse("email");
const blog = default_parse("blog");
const company = default_parse("company");
const location = default_parse("location");
const hireable = parse_boolean("hireable");
const bio = default_parse("bio");


const previews = [
]

const inputs = {
  token,
  name,
  email,
  blog,
  company,
  location,
  hireable,
  bio,
}


request(token, 
  "patch", 
  "/user", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });