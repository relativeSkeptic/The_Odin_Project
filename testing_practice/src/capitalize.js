function capitalize(word) {
    if(word === "") {
        return null;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = { capitalize };