const { caesarCipher } = require('./caesarCipher');

//Wrap case
test("Wraps 'xyz' to 'abc", () => {
    expect(caesarCipher("xyz", 3)).toMatch("abc");
})

//Case preservation
test("Ensures 'HeLLo' returns 'KhOOr'", () => {
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
})

//Nom alphabetic values
test("Ignores non-alphabetic characters", () => {
    expect(caesarCipher("He_LLo!", 3)).toMatch("Kh_OOr!");
})