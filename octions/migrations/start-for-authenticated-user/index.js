const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const repositories = parse_array("repositories");
const lock_repositories = parse_boolean("lock_repositories");
const exclude_attachments = parse_boolean("exclude_attachments");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  repositories,
  lock_repositories,
  exclude_attachments,
  file_output,
}


request(token, 
  "post", 
  "/user/migrations", 
  previews,
  _.omit(inputs, ["token", "file_output"]),
  file_output,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });