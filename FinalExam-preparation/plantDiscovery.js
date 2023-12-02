function plantDiscovery(input) {

    let plants = {}

    let n = Number(input.shift())

    for (let i = 0; i < n; i++) {
        let tokens = input.shift()
        tokens = tokens.split("<->")
        let plant = tokens[0]
        let rarity = Number(tokens[1])

        plants[plant] = { plant, rarity, rating: 0, count: 0 }
    }

    let command = input.shift()

    while (command != "Exhibition") {
        let tokens = command.split(" - ").join(" ").split(" ")
        let action = tokens[0]
        let plant = tokens[1]

        if (action == "Rate:") {
            let counter = 1
            let rating = Number(tokens[2])
            if (plant in plants) {
                plants[plant].rating += rating
                plants[plant].count += counter
            } else {
                console.log('error');
            }
        } else if (action == "Update:") {
            let newRarity = Number(tokens[2])
            if (plant in plants) {
                plants[plant].rarity = newRarity
            } else {
                console.log('error');
            }
        } else if (action == "Reset:") {
            if (plant in plants) {
                plants[plant].rating = 0
                plants[plant].count = 0
            }
        }
        command = input.shift()
    }

    console.log('Plants for the exhibition:');

    let entries = Object.entries(plants)
    for (let entry of entries) {
        let { plant, rarity, rating, count } = entry[1]
        let averageRating = rating / count || 0

        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${(averageRating).toFixed(2)}`);
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])