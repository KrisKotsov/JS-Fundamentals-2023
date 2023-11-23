function theImitationGame(input) {

    let message = input.shift()
    let command = input.shift()

    while (command != "Decode") {
        let tokens = command.split("|")

        if (tokens[0] == "Move") {
            let lettersCount = Number(tokens[1])
            let firstHalf = message.slice(0, lettersCount)
            let last = message.slice(lettersCount)

            message = last + firstHalf
        } else if (tokens[0] == "Insert") {
            let idx = Number(tokens[1])
            let value = tokens[2]

            let firstHalf = message.substring(0, idx)
            let last = message.substring(idx)

            message = firstHalf.concat(value).concat(last)
        } else if (tokens[0] == "ChangeAll") {
            let subs = tokens[1]
            let replacement = tokens[2]

            let parts = message.split(subs)
            message = parts.join(replacement)

            // let pattern = new RegExp(subs, "g")
            // message = message.replace(pattern, replacement)
        }

        command = input.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([

    'owyouh',

    'Move|2',

    'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode'])