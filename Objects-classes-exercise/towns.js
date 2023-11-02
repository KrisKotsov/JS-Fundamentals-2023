function towns(arr) {

    for (let el of arr) {
        let tokens = el.split(" | ")
        let name = tokens[0]
        let latitude = Number(tokens[1])
        let longitude = Number(tokens[2])

        let townObj = {
            town: name,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }

        console.log(townObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])