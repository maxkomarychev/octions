const core = require("@actions/core");
const { request } = require("@octokit/request");
const github = require("@actions/github")

function parse_array(input_name) {
  const input_value = core.getInput(input_name)
  if (input_value === "") {
    return undefined; 
  }
  if (input_value === "<<EMPTY>>") {
    return [];
  }
  return input_value.split(",");
}

function parse_boolean(input_name) {
  const input_value = core.getInput(input_name)
  return input_value === "true"
}

function default_parse(input_name) {
  const input_value = core.getInput(input_name)
  if (!input_value) {
    if (input_name === 'owner') {
      return github.context.repo.owner
    } else if (input_name === 'repo') {
      return github.context.repo.repo
    }
  }
  return input_value || undefined
}

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const body = default_parse("body");
const commit_id = default_parse("commit_id");
const path = default_parse("path");
const position = default_parse("position");
const side = default_parse("side");
const line = default_parse("line");
const start_line = default_parse("start_line");
const start_side = default_parse("start_side");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "comfort-fade",
    ]
  } 
});

requestWithAuth("post /repos/{owner}/{repo}/pulls/{pull_number}/comments", {
    token,
    owner,
    repo,
    pull_number,
    body,
    commit_id,
    path,
    position,
    side,
    line,
    start_line,
    start_side,
})
  .then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });