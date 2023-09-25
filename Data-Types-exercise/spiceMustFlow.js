function spiceMustFlow(yieldInSource) {

    let totalYield = 0;
    let daysMined = 0

    while (yieldInSource >= 100) {
        totalYield += yieldInSource
        totalYield -= 26
        yieldInSource -= 10
        daysMined++

        if (yieldInSource < 100) {
            totalYield -= 26
            break;
        }

        totalYield += yieldInSource
        totalYield -= 26
        yieldInSource -= 10
        daysMined++

        if (yieldInSource < 100) {
            totalYield -= 26
            break;
        }

    }
    console.log(daysMined);
    console.log(totalYield);
}

spiceMustFlow(450)