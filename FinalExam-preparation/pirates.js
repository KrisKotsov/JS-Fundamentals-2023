function pirates(input) {

    let cities = {}

    let command = input.shift()

    while (command != "Sail") {
        let tokens = command.split("||")
        let city = tokens[0]
        let population = Number(tokens[1])
        let gold = Number(tokens[2])

        if (city in cities) {
            cities[city].population += population
            cities[city].gold += gold
        } else {
            cities[city] = { population, gold }
        }
        command = input.shift()
    }

    let events = input.shift()

    while (events != "End") {
        let tokens = events.split("=>")
        let event = tokens[0]
        let town = tokens[1]

        if (event == "Plunder") {
            let killedPeople = Number(tokens[2])
            let stolenGold = Number(tokens[3])

            cities[town].population -= killedPeople
            cities[town].gold -= stolenGold
            console.log(`${town} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);

            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                delete cities[town]
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (event == "Prosper") {
            let prosperGold = Number(tokens[2])

            if (prosperGold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                events = input.shift()
                continue
            } else {
                cities[town].gold += prosperGold
                console.log(`${prosperGold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }
        events = input.shift()
    }

    let entries = Object.entries(cities)

    if (entries.length > 0) {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);

        for (let entry of entries) {
            let city = entry[0]
            let { population, gold } = entry[1]

            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates(["Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End"])