function dungeonestDark(arr) {

    let initialHealth = 100;
    let initialCoins = 0
    let healedHP = 0
    let roomCounter = 0

    let roomsInfo = arr[0]
    let rooms = roomsInfo.split("|")

    for (let el of rooms) {
        roomCounter++

        let tokens = el.split(" ")

        let command = tokens[0]
        let quantity = Number(tokens[1])

        if (command == "potion") {
            if (initialHealth + quantity <= 100) {
                healedHP = quantity
            } else {
                healedHP = 100 - initialHealth
            }
            initialHealth += healedHP

            if (initialHealth >= 100) {
                initialHealth = 100
            }

            console.log(`You healed for ${healedHP} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (command == "chest") {
            initialCoins += quantity
            console.log(`You found ${quantity} coins.`);
        } else {
            initialHealth -= quantity
            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                return
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])