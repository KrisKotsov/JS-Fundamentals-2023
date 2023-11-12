function modernTimes(str) {

    let words = str.split(" ")
    let hashWords = words.filter((word) => word.startsWith("#") && word.length > 1)

    for (let word of hashWords) {
        word = word.slice(1)
        let isValid = true
        for (let letter of word) {
            if (!/[A-Za-z]/.test(letter)) {
                isValid = false
                break
            }
        }
        if (isValid) {
            console.log(word);
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')