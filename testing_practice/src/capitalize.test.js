const { capitalize } = require('./capitalize');

//Base case
test("Takes 'cat' and converts it to 'Cat'", () => {
    expect(capitalize("cat")).toMatch(/Cat/);
})

//Empty string
test("Takes '' and returns null", () => {
    expect(capitalize('')).toBeNull();
});