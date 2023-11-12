function extractFile(str) {

    let file = str.split("\\").pop()
    let extension = []

    for (let i = file.length - 1; i > 0; i--) {
        let char = file[i]
        extension.push(char)
        file = file.substring(0, file.length - 1)
        if (char === ".") {
            break
        }
    }

    console.log(`File name: ${file}`);
    let joined = extension.reverse().join("")
    console.log(`File extension: ${joined.substring(1, joined.length)}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')