function requestBodyToInputs(body) {
  if (!body) {
    return [];
  }
  const content = body.content["application/json"];
  if (!content) {
    return [];
  }
  const { properties, required } = content.schema;
  if (!properties) {
    return [];
  }
  return Object.keys(properties).reduce((acc, key) => {
    const { description, type } = properties[key];
    return [
      ...acc,
      {
        name: key,
        description,
        required: Boolean(required && required.includes(key)),
        is_boolean: type === "boolean",
        is_array: type === "array"
      }
    ];
  }, []);
}

function parametersToInputs(parameters) {
  return parameters.reduce((acc, parameter) => {
    const { name, in: location, description, required, schema } = parameter;
    if (location === "header") {
      return acc;
    }
    return [
      ...acc,
      {
        name,
        description,
        required: name !== "owner" && name !== "repo"
      }
    ];
  }, []);
}

function previews(xgithub) {
  if (!xgithub) {
    return [];
  }
  return xgithub.previews.map(preview => {
    return {
      name: preview.name
    };
  });
}

function methodToMeta(method, path, method_data, outputs) {
  const {
    summary,
    description,
    parameters,
    requestBody,
    "x-github": xgithub,
    operationId
  } = method_data;
  return {
    name: summary,
    description,
    api_details: `This action implements \`${method.toUpperCase()}\` request to \`${path}\``,
    octokit_doc: method_data.externalDocs.url,
    operationId,
    inputs: [
      {
        name: "token",
        required: true,
        description: "Token to authenticate the request"
      },
      ...parametersToInputs(parameters),
      ...requestBodyToInputs(requestBody),
      {
        name: "file_output",
        description: "Path to store full output of the action",
        required: false
      },
      {
        name: "custom_outputs",
        description:
          "Custom outputs to create for step. This has to be YAML multiline string literal " +
          "`custom_outputs: \\|<newline> output_name:path.in.result`",
        required: false
      }
    ],
    outputs: outputs,
    previews: previews(xgithub)
  };
}

module.exports = methodToMeta;
