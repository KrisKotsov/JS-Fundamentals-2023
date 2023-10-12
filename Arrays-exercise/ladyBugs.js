function ladyBugs(input) {

    let fieldSize = input[0]
    let initialPositions = input[1].split(" ").map(Number)
    let field = []

    for (let i = 0; i < fieldSize; i++) {
        if (initialPositions.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0
        }
    }

    for (let j = 2; j < input.length; j++) {
        let command = input[j]
        let tokens = command.split(" ")

        let ladyBugIdx = Number(tokens[0])
        let direction = tokens[1]
        let flyLength = Number(tokens[2])

        if (!field[ladyBugIdx]) {
            continue
        }

        field[ladyBugIdx] = 0

        if (direction == "left") {
            let newIdx = ladyBugIdx - flyLength

            if (newIdx >= 0) {
                while (field[newIdx] == 1) {
                    newIdx -= flyLength
                }
                if (newIdx >= 0) {
                    field[newIdx] = 1
                }
            }
        } else {
            let newIdx = ladyBugIdx + flyLength

            if (newIdx < field.length) {
                while (field[newIdx] == 1) {
                    newIdx += flyLength
                }
                if (newIdx < field.length) {
                    field[newIdx] = 1
                }
            }
        }
    }

    console.log(field.join(" "));
}

ladyBugs([3, '0 1',

    '0 right 1',

    '2 right 1'])