function storeProvision(arr1, arr2) {

    let provision = {}

    for (let i = 0; i < arr1.length; i += 2) {
        let product = arr1[i]
        let quantity = Number(arr1[i + 1])

        provision[product] = quantity
    }

    for (let j = 0; j < arr2.length; j += 2) {
        let product = arr2[j]
        let quantity = Number(arr2[j + 1])

        if (product in provision) {
            provision[product] += quantity
        } else {
            provision[product] = quantity
        }
    }

    for (let [key, value] of Object.entries(provision)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])