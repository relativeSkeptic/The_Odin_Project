const inputCapacity = {
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    twentyFive: 25,
    twentySix: 26,
    oneThousandTwentyThree: 1023,
    oneThousandSixHundredForty: 1640,
    thirtyTwoThousandEightyThree: 32083
};

const inputGetSet = {
    stringTest: [ 'favoriteFruit', 'apple' ],
    numberTest: [ 'favoriteNumber', 5 ],
    keyNumberTest: [ 28, 'theKeyIsAnInteger' ],
    updateValueTest: [ 'favoriteFruit', 'banana' ],
    nullKeyTest: [],
    specialCharTest: [ 'te$t😀', '🤯em0j!' ],
    emptyKeyTest: [ '', 'theKeyIsEmpty' ],
    updateValue_2Test: [28, 'theKeyIsStillAnInteger' ]
};

const largeInputGet = {

};

export { inputCapacity, inputGetSet };