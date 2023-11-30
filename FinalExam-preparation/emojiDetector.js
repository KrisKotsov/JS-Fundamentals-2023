function emojiDetector(input) {

    let splitted = input.shift().split(" ")
    let threshold = []

    for (let el of splitted) {
        if (/\d+/.test(el)) {
            threshold.push(el)
        }
    }

    let totalThreshold = 1

    for (let el of threshold) {
        let matches = el.split("")

        for (let match of matches) {
            let digitMatch = match.match(/\d/)
            if (digitMatch) {
                let extracted = Number(digitMatch[0])
                totalThreshold = totalThreshold * extracted
            }
        }
    }
    console.log(`Cool threshold: ${totalThreshold}`);

    let pattern = /(\::|\*\*)[A-Z][a-z]{2,}\1/g

    let match;
    let counter = 0

    let coolEmojis = []

    while ((match = pattern.exec(splitted)) !== null) {
        counter++
        coolEmojis.push(match[0])
    }

    console.log(`${counter} emojis found in the text. The cool ones are:`);

    let coolnessCounter = 0
    let cool = []

    for (let emoji of coolEmojis) {
        let splittedEmoji = emoji.split("")

        for (let match of splittedEmoji) {
            let letterMatch = match.match(/[A-Za-z]/)

            if (letterMatch) {
                let asciiMatch = letterMatch[0].charCodeAt()
                coolnessCounter += asciiMatch
            }
        }
        if (coolnessCounter >= totalThreshold) {
            cool.push(emoji)
        }
        coolnessCounter = 0
    }

    cool.forEach((emoji) => console.log(emoji))
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])