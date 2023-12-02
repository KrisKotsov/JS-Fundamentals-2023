function nfs(input) {

    let lines = Number(input.shift())
    let cars = {}

    for (let i = 0; i < lines; i++) {
        let tokens = input.shift().split("|")
        let car = tokens[0]
        let mileage = Number(tokens[1])
        let fuel = Number(tokens[2])

        cars[car] = { mileage, fuel }
    }

    let command = input.shift()

    while (command != "Stop") {
        let tokens = command.split(" : ")
        let action = tokens[0]
        let car = tokens[1]

        if (action == "Drive") {
            let distance = Number(tokens[2])
            let fuel = Number(tokens[3])
            if (cars[car].fuel > fuel) {
                cars[car].mileage += distance
                cars[car].fuel -= fuel
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }

            if (cars[car].mileage >= 100000) {
                delete cars[car]
                console.log(`Time to sell the ${car}!`);
            }
        } else if (action == "Refuel") {
            let fuel = Number(tokens[2])
            let startingFuel = cars[car].fuel

            cars[car].fuel += fuel

            if (cars[car].fuel > 75) {
                cars[car].fuel = 75
                console.log(`${car} refueled with ${75 - startingFuel} liters`);
            } else {
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (action == "Revert") {
            let km = Number(tokens[2])

            cars[car].mileage -= km

            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000
            } else {
                console.log(`${car} mileage decreased by ${km} kilometers`);
            }
        }

        command = input.shift()
    }

    for (let [car, value] of Object.entries(cars)) {
        let { mileage, fuel } = value

        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}

nfs([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])