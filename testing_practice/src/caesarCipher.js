function caesarCipher(text, key) {
    let result = "";
    for(let i = 0; i < text.length; i++) {
        if (/[a-zA-Z]/.test(text[i]) === true) {
            let base = "";
            if (text[i] === text[i].toUpperCase()) {
                base = 65;
            }
            else {
                base = 97;
            }
            let encryptedChar = ((text.charCodeAt(i) - base) + key) % 26;
            result += String.fromCharCode(encryptedChar + base);
        }   
        else {
            result += text[i];
        }
    }
    return result;
}

module.exports = { caesarCipher };