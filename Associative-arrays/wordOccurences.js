function wordOccurences(arr) {

    let words = {}

    for (let word of arr) {
        let equalWords = word

        words[equalWords] = (words[equalWords] || 0) + 1
    }

    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1])

    let wordsSorted = Object.fromEntries(sortedWords)

    for (let [key, value] of Object.entries(wordsSorted)) {
        console.log(`${key} -> ${value} times`);
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])