function secretChat(input) {

    let message = input.shift()
    let command = input.shift()

    while (command != "Reveal") {
        let tokens = command.split(":|:")

        if (tokens[0] == "InsertSpace") {
            let idx = Number(tokens[1])

            message = message.split("")
            message.splice(idx, 0, " ")
            message = message.join("")
            console.log(message);
        } else if (tokens[0] == "Reverse") {
            let substr = tokens[1]

            if (message.includes(substr)) {
                let idx = message.indexOf(substr)
                message = message.split("")
                let cutStr = message.splice(idx)
                cutStr.reverse()
                message = message.concat(cutStr).join("")
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (tokens[0] == "ChangeAll") {
            let subs = tokens[1]
            let regex = new RegExp(subs, "g")
            let replacement = tokens[2]

            message = message.replace(regex, replacement)
            console.log(message);
        }

        command = input.shift()
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