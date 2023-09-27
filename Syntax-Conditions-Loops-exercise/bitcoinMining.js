function bitcoinMining(input) {

    let index = 0
    let gramsMined = input[index]

    let bitcoinPrice = 11949.16
    let goldPrice = 67.51
    let counterDays = 0
    let totalBoughtBitcoins = 0
    let firstDay = 0
    let totalAmountInBank = 0

    while (index < input.length) {
        counterDays++
        if (counterDays % 3 == 0) {
            gramsMined = gramsMined * 0.70
        }

        totalAmountInBank += gramsMined * goldPrice

        while (totalAmountInBank >= bitcoinPrice) {
            totalBoughtBitcoins++
            totalAmountInBank -= bitcoinPrice
            if (totalBoughtBitcoins == 1) {
                firstDay = counterDays
            }
        }

        index++
        gramsMined = input[index]
    }
    console.log(`Bought bitcoins: ${totalBoughtBitcoins}`);
    if (totalBoughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalAmountInBank.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300])