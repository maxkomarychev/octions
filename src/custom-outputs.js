function customOutputs(spec) {
  return spec
    ? spec
        .split("\n")
        .filter(value => value)
        .reduce((acc, value) => {
          const [key, path] = value.split(":");
          return { ...acc, [key.trim()]: path.trim() };
        }, {})
    : {};
}

module.exports = customOutputs;
