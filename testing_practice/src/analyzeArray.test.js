const { analyzeArray } = require('./analyzeArray');

let testArray = analyzeArray([1,8,3,4,2,6]);

test("Checks average", () => {
    expect(testArray.average).toBe(4);
});

test("Checks Max", () => {
    expect(testArray.max).toBe(8);
});

test("Checks Min", () => {
    expect(testArray.min).toBe(1);
});

test("Checks length", () => {
    expect(testArray.length).toBe(6);
});