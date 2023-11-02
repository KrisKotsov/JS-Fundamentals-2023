function catalogue(arr) {

    let products = []

    for (let el of arr) {
        let tokens = el.split(" : ")
        let productName = tokens[0]
        let productPrice = Number(tokens[1])

        let productsObj = { productName: productName, productPrice: productPrice }

        products.push(productsObj)
    }

    products.sort((a, b) => a.productName.localeCompare(b.productName))

    let groupedProducts = {}

    for (let product of products) {
        let firstLetter = product.productName.charAt(0).toUpperCase()

        if (!groupedProducts[firstLetter]) {
            groupedProducts[firstLetter] = []
        }

        groupedProducts[firstLetter].push(product)
    }

    let buff = " "
    for (let key of Object.keys(groupedProducts)) {
        buff += key + "\n"

        groupedProducts[key].map(product => {
            buff += `  ${product.productName}: ${product.productPrice}\n`
        })
    }
    console.log(buff);
}

catalogue([
    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'
])