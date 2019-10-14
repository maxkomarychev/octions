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
const deployment_id = default_parse("deployment_id");
const state = default_parse("state");
const target_url = default_parse("target_url");
const log_url = default_parse("log_url");
const description = default_parse("description");
const environment = default_parse("environment");
const environment_url = default_parse("environment_url");
const auto_inactive = parse_boolean("auto_inactive");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "flash",
      "ant-man",
    ]
  } 
});

requestWithAuth("post /repos/{owner}/{repo}/deployments/{deployment_id}/statuses", {
    token,
    owner,
    repo,
    deployment_id,
    state,
    target_url,
    log_url,
    description,
    environment,
    environment_url,
    auto_inactive,
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