function arrayModifier(arr) {

    let initialArr = arr.shift().split(" ").map(Number)

    for (let el of arr) {
        let commandsArr = el.split(" ")
        let command = commandsArr[0]

        if (command == "end") {
            break
        } else if (command == "swap") {
            let idxOne = Number(commandsArr[1])
            let idxTwo = Number(commandsArr[2])

            let firstEl = initialArr.splice(idxOne, 1)
            let secondEl = []
            if (idxTwo == 0) {
                secondEl = initialArr.splice(idxTwo, 1)
            } else {
                secondEl = initialArr.splice(idxTwo - 1, 1)
            }

            if (idxTwo == 0) {
                initialArr.splice(idxOne - 1, 0, ...secondEl)
                initialArr.splice(idxTwo, 0, ...firstEl)
            } else {
                initialArr.splice(idxOne, 0, ...secondEl)
                initialArr.splice(idxTwo, 0, ...firstEl)
            }
        } else if (command == "multiply") {
            let idxOne = Number(commandsArr[1])
            let idxTwo = Number(commandsArr[2])

            let multiplyEl = initialArr[idxOne] * initialArr[idxTwo]
            initialArr.splice(idxOne, 1, multiplyEl)
        } else if (command == "decrease") {
            for (let i = 0; i < initialArr.length; i++) {
                initialArr[i] -= 1
            }
        }
    }
    console.log(initialArr.join(", "));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])