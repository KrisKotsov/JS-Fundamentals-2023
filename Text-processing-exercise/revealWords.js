function revealWords(str, template) {

    let words = str.split(", ")

    for (let word of words) {
        let repeatCount = word.length

        let starTemplate = "*".repeat(repeatCount)

        template = template.replace(starTemplate, word)
    }
    console.log(template);
}

revealWords('great, learning',

    'softuni is ***** place for ******** new programming languages')