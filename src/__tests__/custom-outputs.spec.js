const customOutputs = require("../custom-outputs");

describe("can parse custom outputs", () => {
  it("parses outputs separated by newlines", () => {
    const outputSpec = `id:data.id
        number:data.number
        status:status`;
    expect(customOutputs(outputSpec)).toEqual({
      id: "data.id",
      number: "data.number",
      status: "status"
    });
  });
});
