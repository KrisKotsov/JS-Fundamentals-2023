function rightPlace(word, char, newWord) {

    let sym = "";

    for (let i = 0; i < word.length; i++) {
        let result = String(word[i])
        sym += result
    }

    let newStr = sym.replace("_", char)

    if (newStr == newWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i',

    'String')