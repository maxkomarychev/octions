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
const filter = default_parse("filter");
const state = default_parse("state");
const labels = default_parse("labels");
const sort = default_parse("sort");
const direction = default_parse("direction");
const since = default_parse("since");
const per_page = default_parse("per_page");
const page = default_parse("page");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "symmetra",
      "machine-man",
      "squirrel-girl",
    ]
  } 
});

requestWithAuth("get /issues", {
    token,
    filter,
    state,
    labels,
    sort,
    direction,
    since,
    per_page,
    page,
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