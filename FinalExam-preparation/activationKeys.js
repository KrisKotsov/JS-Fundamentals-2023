function activationKeys(input) {

    let key = input.shift()

    let command = input.shift()

    while (command != "Generate") {
        let tokens = command.split(">>>")
        let action = tokens[0]

        if (action == "Contains") {
            let substr = tokens[1]

            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (action == "Flip") {
            let lowerOrUpper = tokens[1]
            let startIdx = Number(tokens[2])
            let endIdx = Number(tokens[3])
            if (lowerOrUpper == "Upper") {
                let el = key.split("")

                for (let i = startIdx; i < endIdx; i++) {
                    el[i] = el[i].toUpperCase()
                }
                key = el.join("")
                console.log(key);
            } else if (lowerOrUpper == "Lower") {
                let el = key.split("")

                for (let i = startIdx; i < endIdx; i++) {
                    el[i] = el[i].toLowerCase()
                }
                key = el.join("")
                console.log(key);
            }
        } else if (action == "Slice") {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])

            let firstPart = key.slice(0, startIdx)
            let end = key.slice(endIdx)

            key = firstPart + end
            console.log(key);
        }

        command = input.shift()
    }
    console.log(`Your activation key is: ${key}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])