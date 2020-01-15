const fs = require("fs");
const core = require("@actions/core");
const _ = require("lodash");
const outputs = require("../default-outputs");
const { request } = require("@octokit/request");
const customOutputs = require("../custom-outputs");

async function octionRequest(
  token,
  method,
  path,
  previews,
  inputs,
  file_output,
  custom_outputs
) {
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
  const parsedOutputs = customOutputs(custom_outputs);
  console.log("outputs?", parsedOutputs, custom_outputs);
  for (const outputName in parsedOutputs) {
    const path = parsedOutputs[outputName];
    const value = _.get(result, path);
    console.log("custom output?", outputName, path, value);
    if (value) {
      core.setOutput(outputName, value);
    }
  }
  if (file_output) {
    fs.writeFileSync(file_output, JSON.stringify(result));
  }
  return result;
}

module.exports = octionRequest;
