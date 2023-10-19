function computerStore(arr) {

    let totalPrice = 0
    let priceWithoutTax = 0
    let priceAfterTax = 0
    let taxes = 0

    for (let el of arr) {
        let command = el

        if (command <= 0) {
            console.log('Invalid price!');
            continue
        }

        if (command == "special") {
            totalPrice = priceAfterTax * 0.90
            taxes = priceAfterTax - priceWithoutTax
            if (totalPrice == 0) {
                console.log('Invalid order!');
                return
            }
            console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTax.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`);
            return
        } else if (command == "regular") {
            totalPrice = priceAfterTax
            taxes = priceAfterTax - priceWithoutTax

            if (totalPrice == 0) {
                console.log('Invalid order!');
                return
            }
            console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTax.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`);
            return
        }
        priceWithoutTax += Number(command)
        priceAfterTax = priceWithoutTax * 1.20
    }
}

computerStore([
    "regular"
])