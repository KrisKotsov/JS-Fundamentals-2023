function censoredWords(str, word) {

    let newWord = "*".repeat(word.length)

    console.log(str.split(word).join(newWord))
}

censoredWords('A small sentence with some words',

    'small')