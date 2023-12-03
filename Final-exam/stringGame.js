function stringGame(input) {

    let str = input.shift()

    let command = input.shift()

    while (command != "Done") {
        let tokens = command.split(" ")
        let action = tokens[0]

        if (action == "Change") {
            let char = tokens[1]
            let replacement = tokens[2]

            let piece = str.split(char)

            str = piece.join(replacement)
            console.log(str);
        } else if (action == "Includes") {
            let substr = tokens[1]

            if (str.includes(substr)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (action == "End") {
            let substr = tokens[1]
            let splitted = str.split(" ")

            if (substr == splitted[splitted.length - 1]) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (action == "Uppercase") {
            str = str.toUpperCase()
            console.log(str);
        } else if (action == "FindIndex") {
            let char = tokens[1]
            console.log(str.indexOf(char));
        } else if (action == "Cut") {
            let startIdx = Number(tokens[1])
            let count = Number(tokens[2])

            let cutted = str.slice(startIdx, startIdx + count)
            console.log(cutted);
        }

        command = input.shift()
    }
}

stringGame((["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]))