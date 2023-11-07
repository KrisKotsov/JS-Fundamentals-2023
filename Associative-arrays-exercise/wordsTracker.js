function wordsTracker(arr) {

    let searchedWords = arr.shift().split(" ")
    let words = {}

    for (let word of searchedWords) {
        words[word] = 0
    }

    for (let word of arr) {
        if (word in words) {
            words[word]++
        }
    }

    let entries = Object.entries(words).sort((a, b) => b[1] - a[1])

    for (let [word, repeats] of entries) {
        console.log(`${word} - ${repeats}`);
    }
}

wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])