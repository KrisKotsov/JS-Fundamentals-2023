function arrayManipulations(arr) {

    let arrNums = arr.shift().split(" ").map(Number)

    for (i = 0; i < arr.length; i++) {
        let token = arr[i].split(" ")
        let command = token[0]

        if (command == "Add") {
            arrNums.push(Number(token[1]))
        } else if (command == "Remove") {
            arrNums = arrNums.filter(el => el !== Number(token[1]))
        } else if (command == "RemoveAt") {
            arrNums.splice(token[1], 1)
        } else if (command == "Insert") {
            arrNums.splice(token[2], 0, Number(token[1]))
        }
    }

    console.log(arrNums.join(" "));
}

arrayManipulations(['6 12 2 65 6 42',

    'Add 8',

    'Remove 12',

    'RemoveAt 3',

    'Insert 6 2'])