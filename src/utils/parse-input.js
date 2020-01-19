const fs = require("fs");
const core = require("@actions/core");
const github = require("@actions/github");

const FILE_REGEX = /^FILE::.*$/i;

function is_file_input(input_value) {
  return FILE_REGEX.test(input_value);
}

function read_file_if_needed(input_value) {
  if (is_file_input(input_value)) {
    const path = input_value.substring(6);
    return fs.readFileSync(path).toString();
  } else {
    return input_value;
  }
}

function get_input(input_name) {
  const input_value = core.getInput(input_name);
  return read_file_if_needed(input_value);
}

function parse_array(input_name) {
  const input_value = get_input(input_name);
  if (input_value === "") {
    return undefined;
  }
  if (input_value === "<<EMPTY>>") {
    return [];
  }
  return input_value.split(",");
}

function parse_boolean(input_name) {
  const input_value = get_input(input_name);
  return input_value === "true";
}

function default_parse(input_name) {
  const input_value = get_input(input_name);
  if (!input_value) {
    if (input_name === "owner") {
      return github.context.repo.owner;
    } else if (input_name === "repo") {
      return github.context.repo.repo;
    }
  }
  return input_value || undefined;
}

module.exports = {
  parse_array,
  parse_boolean,
  default_parse
};
