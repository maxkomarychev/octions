const core = require("@actions/core");

export function parse_array(input_name) {
  const input_value = core.getInput(input_name);
  if (input_value === "") {
    return undefined;
  }
  if (input_value === "<<EMPTY>>") {
    return [];
  }
  return input_value.split(",");
}

export function parse_boolean(input_name) {
  const input_value = core.getInput(input_name);
  return input_value === "true";
}

export function default_parse(input_name) {
  const input_value = core.getInput(input_name);
  if (!input_value) {
    if (input_name === "owner") {
      return github.context.repo.owner;
    } else if (input_name === "repo") {
      return github.context.repo.repo;
    }
  }
  return input_value || undefined;
}
