function arrayManipulator(arrOne, arrTwo) {

    for (let el of arrTwo) {
        arrOne.map(Number)
        let newStr = el.split(" ")
        let command = newStr[0]

        while (command != "print") {
            if (command == "add") {
                arrOne.splice(newStr[1], 0, Number(newStr[2]))
                break
            } else if (command == "addMany") {
                let index = Number(newStr[1])
                let sliced = newStr.slice(2)
                sliced = sliced.map(Number)
                arrOne.splice(index, 0, ...sliced)
                break
            } else if (command == "contains") {
                console.log(arrOne.indexOf(Number(newStr[1])));
                break
            } else if (command == "remove") {
                arrOne.splice(Number(newStr[1]), 1)
                break
            } else if (command == "shift") {
                let position = Number(newStr[1])
                position = position % arrOne.length
                let rotatedPart = arrOne.slice(0, position)
                let remainingPart = arrOne.slice(position)
                arrOne = remainingPart.concat(rotatedPart)
                break
            } else if (command == "sumPairs") {
                let sum = 0
                for (let i = 0; i < arrOne.length; i++) {
                    sum = arrOne[i] + arrOne[i + 1]
                    if (sum !== sum) {
                        break
                    } else {
                        arrOne.splice(i, 2, sum)
                    }
                }
                break
            }
        }
    }

    console.log(`[ ${arrOne.join(", ")} ]`);
}

arrayManipulator([1, 2, 4, 5, 6, 7],

    ['add 1 8', 'contains 1', 'contains 3', 'sumPairs', 'print'])