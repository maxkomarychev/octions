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
const org = default_parse("org");
const billing_email = default_parse("billing_email");
const company = default_parse("company");
const email = default_parse("email");
const location = default_parse("location");
const name = default_parse("name");
const description = default_parse("description");
const has_organization_projects = parse_boolean("has_organization_projects");
const has_repository_projects = parse_boolean("has_repository_projects");
const default_repository_permission = default_parse("default_repository_permission");
const members_can_create_repositories = parse_boolean("members_can_create_repositories");
const members_can_create_internal_repositories = parse_boolean("members_can_create_internal_repositories");
const members_can_create_private_repositories = parse_boolean("members_can_create_private_repositories");
const members_can_create_public_repositories = parse_boolean("members_can_create_public_repositories");
const members_allowed_repository_creation_type = default_parse("members_allowed_repository_creation_type");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "surtur",
    ]
  } 
});

requestWithAuth("patch /orgs/{org}", {
    token,
    org,
    billing_email,
    company,
    email,
    location,
    name,
    description,
    has_organization_projects,
    has_repository_projects,
    default_repository_permission,
    members_can_create_repositories,
    members_can_create_internal_repositories,
    members_can_create_private_repositories,
    members_can_create_public_repositories,
    members_allowed_repository_creation_type,
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