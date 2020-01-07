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
        required: true
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

function methodToMeta(method, path, method_data) {
  const {
    summary,
    description,
    parameters,
    requestBody,
    "x-github": xgithub
  } = method_data;
  return {
    name: summary,
    description,
    api_details: `This action implements \`${method.toUpperCase()}\` request to \`${path}\``,
    octokit_doc: method_data.externalDocs.url,
    inputs: [
      {
        name: "token",
        required: true,
        description: "Token to authenticate the request"
      },
      ...parametersToInputs(parameters),
      ...requestBodyToInputs(requestBody)
    ],
    outputs: [
      {
        name: "id",
        description: "`id` field of the response (if exists)"
      },
      {
        name: "number",
        description: "`number` field of the response (if exists)"
      }
    ],
    previews: previews(xgithub)
  };
}

module.exports = methodToMeta;
