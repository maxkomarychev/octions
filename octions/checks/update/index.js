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
const check_run_id = default_parse("check_run_id");
const name = default_parse("name");
const details_url = default_parse("details_url");
const external_id = default_parse("external_id");
const started_at = default_parse("started_at");
const status = default_parse("status");
const conclusion = default_parse("conclusion");
const completed_at = default_parse("completed_at");
const output = default_parse("output");
const actions = parse_array("actions");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "antiope",
    ]
  } 
});

requestWithAuth("patch /repos/{owner}/{repo}/check-runs/{check_run_id}", {
    token,
    owner,
    repo,
    check_run_id,
    name,
    details_url,
    external_id,
    started_at,
    status,
    conclusion,
    completed_at,
    output,
    actions,
})
  .then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.data && result.data.status) {
      core.setOutput('status', result.data.status)
    }
    core.setOutput('status', result.status)
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });