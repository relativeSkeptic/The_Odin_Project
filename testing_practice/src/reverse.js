function reverseString(word) {
    let charWord = word.split('');
    let reverseArray = charWord.reverse();
    let joinArray = reverseArray.join('');
    return joinArray
}

module.exports = { reverseString };