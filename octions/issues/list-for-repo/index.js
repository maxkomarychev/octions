const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const milestone = default_parse("milestone");
const state = default_parse("state");
const assignee = default_parse("assignee");
const creator = default_parse("creator");
const mentioned = default_parse("mentioned");
const labels = default_parse("labels");
const sort = default_parse("sort");
const direction = default_parse("direction");
const since = default_parse("since");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "machine-man",
  "squirrel-girl",
]

const inputs = {
  token,
  owner,
  repo,
  milestone,
  state,
  assignee,
  creator,
  mentioned,
  labels,
  sort,
  direction,
  since,
  per_page,
  page,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/issues", 
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