function furniture(input) {

    let totalPrice = 0
    let items = []

    let command = input.shift()

    let pattern = />>(?<name>[A-Z][a-zA-Z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/

    while (command != "Purchase") {
        let match = command.match(pattern)

        if (match) {
            let { name, price, qty } = match.groups

            items.push(name)
            let finalPrice = price * qty
            totalPrice += Number(finalPrice)
        }

        command = input.shift()
    }

    console.log(`Bought furniture:`);

    for (let el of items) {
        console.log(el);
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase'])