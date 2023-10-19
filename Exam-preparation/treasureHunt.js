function treasureHunt(arr) {

    let initialLoot = arr.shift().split("|")
    let averageSum = 0
    let sum = 0

    for (let el of arr) {
        let itemsArr = el.split(" ")
        let command = itemsArr[0]

        while (command != "Yohoho!") {
            if (command == "Loot") {
                for (let i = 1; i < itemsArr.length; i++) {
                    if (!(initialLoot.includes(itemsArr[i]))) {
                        initialLoot.unshift(itemsArr[i])
                    }
                }
                break
            } else if (command == "Drop") {
                let idxOfDrop = Number(itemsArr[1])
                if (idxOfDrop > 0) {
                    let dropedEl = initialLoot.splice(idxOfDrop, 1)
                    initialLoot.push(...dropedEl)
                } else {
                    break
                }
                break
            } else if (command == "Steal") {
                let stolenCount = Number(itemsArr[1])
                let splicedCount = initialLoot.splice(-stolenCount, stolenCount)
                console.log(splicedCount.join(", "));
                break
            }
        }
    }

    for (let items of initialLoot) {
        sum += items.length
    }

    averageSum = sum / initialLoot.length

    if (averageSum > 0) {
        console.log(`Average treasure gain: ${averageSum.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])