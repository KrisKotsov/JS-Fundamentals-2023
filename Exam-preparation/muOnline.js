function muOnline(str) {

    let rooms = 0
    let initialHealth = 100
    let bitcoins = 0
    let healedHP = 0
    let arrStr = str.split("|")

    for (let i = 0; i < arrStr.length; i++) {
        let splitedArr = arrStr[i].split(" ")
        let command = splitedArr[0]
        let amount = Number(splitedArr[1])

        rooms++

        if (command == "potion") {
            if (initialHealth + amount <= 100) {
                healedHP = amount
            } else {
                healedHP = 100 - initialHealth
            }

            initialHealth += healedHP
            console.log(`You healed for ${healedHP} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (command == "chest") {
            bitcoins += amount
            console.log(`You found ${amount} bitcoins.`);
        } else {
            initialHealth -= amount

            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${rooms}`);
                return
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${initialHealth}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")