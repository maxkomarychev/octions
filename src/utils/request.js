const core = require("@actions/core");
const _ = require("lodash");
const outputs = require("../default-outputs");

export default function request(token, method, path, previews, inputs) {
  const requestWithAuth = request.defaults({
    headers: {
      authorization: `Bearer ${token}`
    },
    mediaType: {
      previews
    }
  });
  const result = requestWithAuth(`${method} ${path}`, inputs);
  for (const output of outputs) {
    const { path, name } = output;
    const value = _.get(result, path);
    if (value) {
      core.setOutput(name, value);
    }
  }
  return result;
}
