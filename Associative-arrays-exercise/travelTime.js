function travelTime(arr) {

    let travel = {}

    for (let el of arr) {
        let destinations = el.split(" > ")
        let country = destinations[0]
        let town = destinations[1]
        let cost = Number(destinations[2])

        if (country in travel) {
            if (town in travel[country]) {
                if (cost < travel[country][town]) {
                    travel[country][town] = cost
                }
            } else {
                travel[country][town] = cost
            }
        } else {
            travel[country] = { [town]: cost }
        }
    }

    let entries = Object.entries(travel).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [country, towns] of entries) {
        let townEntries = Object.entries(towns).sort((a, b) => a[1] - b[1])

        let result = `${country} -> `

        for (let [town, cost] of townEntries) {
            result += `${town} -> ${cost} `
        }
        console.log(result);
    }
}

travelTime([

    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

])