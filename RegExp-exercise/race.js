function race(input) {

    let participants = input.shift().split(", ")
    let command = input.shift()

    let result = {}

    participants.forEach(name => result[name] = 0)

    let letterPattern = /[A-Za-z]/g
    let digitsPattern = /[\d]/g

    while (command != "end of race") {
        let letterMatch = command.match(letterPattern).join("")
        let digitsMatch = command.match(digitsPattern)
        let distance = 0

        if (letterMatch in result) {
            for (let el of digitsMatch) {
                distance += Number(el)
            }

            result[letterMatch] += distance
        }
        command = input.shift()
    }

    let entries = Object.entries(result).sort((a, b) => b[1] - a[1])
    entries.pop()

    let final = Object.fromEntries(entries)
    let keys = Object.keys(final)

    console.log(`1st place: ${keys[0]}`);
    console.log(`2nd place: ${keys[1]}`);
    console.log(`3rd place: ${keys[2]}`);
}

race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race'])