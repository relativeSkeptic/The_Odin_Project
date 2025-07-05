const { calculator } = require('./calculator');

//Adding
test("Adds two integers", () => {
    expect(calculator.add(2, 2)).toBe(4);
})

//Subtracting
test("Subtracts two integers", () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

//Multiplication
test("Multiplies two integers", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

//Division
test("Divides two integers", () => {
    expect(calculator.divide(2, 2)).toBe(1);
});