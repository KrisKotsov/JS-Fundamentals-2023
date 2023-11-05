function storage(arr) {

    let storageObj = {}

    for (let el of arr) {
        let tokens = el.split(" ")
        let product = tokens[0]
        let qty = Number(tokens[1])

        if (product in storageObj) {
            storageObj[product] += qty
        } else {
            storageObj[product] = qty
        }
    }
    for (let [key, value] of Object.entries(storageObj)) {
        console.log(key, "->", value);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])