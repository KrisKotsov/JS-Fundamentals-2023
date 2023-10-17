function train(arr) {

    let wagons = arr.shift().split(" ").map(Number)
    let maxCapacity = Number(arr.shift())

    for (let el of arr) {
        arr.map(Number)
        let token = el.split(" ")
        let command = token[0]

        if (command == "Add") {
            wagons.push(token[1])
        } else {
            command = Number(command)
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + command <= maxCapacity) {
                    wagons[i] += command
                    break
                }
            }
        }
    }

    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])