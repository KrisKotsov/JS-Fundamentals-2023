function secretChat(input) {

    let message = input.shift()
    let line = input.shift()

    while (line != "Reveal") {
        let tokens = line.split(":|:")
        let command = tokens[0]

        if (command == "InsertSpace") {
            let idx = Number(tokens[1])

            message = message.split("")
            message.splice(idx, 0, " ")
            message = message.join("")
            console.log(message);
        } else if (command == "Reverse") {
            let substr = tokens[1]
            let idx = message.indexOf(substr)

            if (message.includes(substr)) {
                message = message.split("")
                let cutStr = message.splice(idx)

                cutStr.reverse()
                message = message.concat(cutStr).join("")
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (command == "ChangeAll") {
            let subs = tokens[1]
            let replacement = tokens[2]

            let regex = new RegExp(subs, "g")
            message = message.replace(regex, replacement)

            // let parts = message.split(subs)
            // message = parts.join(replacement)
            console.log(message);
        }

        line = input.shift()
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat([

    'Hiware?uiy',

    'ChangeAll:|:i:|:o',

    'Reverse:|:?uoy',

    'Reverse:|:jd',

    'InsertSpace:|:3',

    'InsertSpace:|:7',

    'Reveal'

])