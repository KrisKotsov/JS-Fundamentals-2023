function numbers(arr) {

    let sequence = arr.shift().split(" ").map(Number)

    for (let el of arr) {
        let commandsArr = el.split(" ")
        let command = commandsArr[0]

        if (command == "Finish") {
            break
        } else if (command == "Add") {
            let value = Number(commandsArr[1])
            sequence.push(value)
        } else if (command == "Remove") {
            let value = Number(commandsArr[1])
            let idx = Number(sequence.indexOf(value))

            if (sequence.includes(value)) {
                sequence.splice(idx, 1)
            } else {
                continue
            }
        } else if (command == "Replace") {
            let value = Number(commandsArr[1])
            let replacement = Number(commandsArr[2])
            let idx = Number(sequence.indexOf(value))

            if (sequence.includes(value)) {
                sequence.splice(idx, 1, replacement)
            } else {
                continue
            }
        } else if (command == "Collapse") {
            let value = Number(commandsArr[1])
            sequence = sequence.filter((el) => el >= value)
        }
    }
    console.log(sequence.join(" "));
}

numbers((["9 9 9 9 -1001 9", "Add 5", "Remove 9", "Replace 9 -2000", "Collapse 9", "Finish"]))