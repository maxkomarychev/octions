const fs = require("fs");
const core = require("@actions/core");
const _ = require("lodash");
const outputs = require("../default-outputs");

async function request(token, method, path, previews, inputs, file_output) {
  const requestWithAuth = request.defaults({
    headers: {
      authorization: `Bearer ${token}`
    },
    mediaType: {
      previews
    }
  });
  const result = await requestWithAuth(`${method} ${path}`, inputs);
  for (const output of outputs) {
    const { path, name } = output;
    const value = _.get(result, path);
    if (value) {
      core.setOutput(name, value);
    }
  }
  if (file_output) {
    fs.writeFileSync(file_output, JSON.stringify(result));
  }
  return result;
}

module.exports = request;
