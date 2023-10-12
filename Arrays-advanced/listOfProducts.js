function listOfProducts(arr) {

    arr.sort()
    let counter = 1

    for (let el of arr) {
        console.log(`${counter}.${el}`);
        counter++
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions',

    'Apples'])