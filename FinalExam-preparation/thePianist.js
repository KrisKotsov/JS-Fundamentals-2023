function thePianist(input) {

    let lines = Number(input.shift())
    let piecesObj = {}

    for (let i = 0; i < lines; i++) {
        let tokens = input[i].split("|")
        let [piece, composer, key] = tokens

        piecesObj[piece] = { composer, key }

    }
    for (let i = 0; i < lines; i++) {
        input.shift()
    }

    let command = input.shift()

    while (command != "Stop") {

        let tokens = command.split("|")
        let action = tokens[0]

        if (action == "Add") {
            let piece = tokens[1]
            let composer = tokens[2]
            let key = tokens[3]

            if (piece in piecesObj) {
                console.log(`${piece} is already in the collection!`);
            } else {
                piecesObj[piece] = { composer, key }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (action == "Remove") {
            let piece = tokens[1]

            if (piece in piecesObj) {
                delete piecesObj[piece]
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action == "ChangeKey") {
            let piece = tokens[1]
            let newKey = tokens[2]

            if (piece in piecesObj) {
                piecesObj[piece].key = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = input.shift()
    }

    let entries = Object.entries(piecesObj)

    for (let el of entries) {
        let piece = el[0]
        let { composer, key } = el[1]

        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])