const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const name = default_parse("name");
const head_sha = default_parse("head_sha");
const details_url = default_parse("details_url");
const external_id = default_parse("external_id");
const status = default_parse("status");
const started_at = default_parse("started_at");
const conclusion = default_parse("conclusion");
const completed_at = default_parse("completed_at");
const output = default_parse("output");
const actions = parse_array("actions");


const previews = [
  "antiope",
]

const inputs = {
  token,
  owner,
  repo,
  name,
  head_sha,
  details_url,
  external_id,
  status,
  started_at,
  conclusion,
  completed_at,
  output,
  actions,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/check-runs", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });