const { capitalize } = require('./capitalize');

test("Takes 'cat' and converts it to 'Cat'", () => {
    expect(capitalize("cat")).toMatch(/Cat/);
})