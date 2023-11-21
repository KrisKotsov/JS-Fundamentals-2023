function softUniBarIncome(input) {

    let totalPrice = 0

    let command = input.shift()
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/

    while (command != "end of shift") {
        let match = command.match(pattern)

        if (match) {
            let { name, product, count, price } = match.groups
            let priceOfOrder = count * price
            totalPrice += priceOfOrder
            console.log(`${name}: ${product} - ${priceOfOrder.toFixed(2)}`);
        }
        command = input.shift()
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift'])