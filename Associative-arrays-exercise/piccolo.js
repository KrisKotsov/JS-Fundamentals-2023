function piccolo(arr) {

    let parking = []

    for (let i = 0; i < arr.length; i++) {

        let splitted = arr[i].split(", ")
        let [command, licensePlate] = splitted

        if (command == "IN" && !parking.includes(licensePlate)) {
            parking.push(licensePlate)
        } else if (command == "OUT" && parking.includes(licensePlate)) {
            let index = parking.indexOf(licensePlate)
            parking.splice(index, 1)
        }

        if (!parking.length) {
            console.log('Parking Lot is Empty');
            break
        }
    }

    parking.sort().map((car) => console.log(car))
}

piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])