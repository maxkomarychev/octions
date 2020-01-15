const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

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
const file_output = default_parse("file_output");


const previews = [
  "surtur",
]

const inputs = {
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
  file_output,
}


request(token, 
  "patch", 
  "/orgs/{org}", 
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