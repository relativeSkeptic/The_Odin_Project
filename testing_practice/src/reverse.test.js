const { reverseString } = require('./reverse');

//Base case
test("Takes 'cat' and converts it to 'tac'", () => {
    expect(reverseString("cat")).toMatch(/tac/);
})