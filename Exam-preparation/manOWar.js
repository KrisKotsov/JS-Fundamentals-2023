function manOWar(arr) {

    let pirateShip = arr.shift().split(">").map(Number)
    let warShip = arr.shift().split(">").map(Number)

    let maxHP = Number(arr.shift())

    let pirateShipSum = 0
    let warShipSum = 0

    for (let el of arr) {
        let commandsArr = el.split(" ")
        let command = commandsArr[0]

        while (command != "Retire") {
            if (command == "Fire") {
                let idxAttack = Number(commandsArr[1])
                let attackPower = Number(commandsArr[2])

                if (idxAttack < 0 || idxAttack > warShip.length - 1) {
                    break
                } else {
                    // let deletedEl = warShip.splice(idxAttack, 1)
                    // warShip.splice(idxAttack, 0, deletedEl - attackPower)
                    warShip[idxAttack] -= attackPower
                    if (warShip[idxAttack] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return
                    }
                }
                break
            } else if (command == "Defend") {
                let idxStartDefend = Number(commandsArr[1])
                let idxLastDefend = Number(commandsArr[2])
                let defendPower = Number(commandsArr[3])

                if (((idxStartDefend < 0) || (idxStartDefend > pirateShip.length - 1)) || ((idxLastDefend < 0) || (idxLastDefend > pirateShip.length - 1))) {
                    break
                } else {
                    // let slicedPart = pirateShip.slice(idxStartDefend, idxLastDefend + 1)
                    // let result = slicedPart.map((el) => el - defendPower)
                    // pirateShip.splice(idxStartDefend, idxLastDefend + 1, ...result)

                    for (let i = idxStartDefend; i <= idxLastDefend; i++) {
                        pirateShip[i] -= defendPower
                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return
                        }
                    }
                }
                break
            } else if (command == "Repair") {
                let idxRepair = Number(commandsArr[1])
                let hpRepair = Number(commandsArr[2])

                if (idxRepair < 0 || idxRepair > pirateShip.length - 1) {
                    break
                } else {
                    let [repairedSection] = pirateShip.splice(idxRepair, 1)
                    if (repairedSection + hpRepair >= maxHP) {
                        repairedSection = maxHP
                    } else {
                        repairedSection += hpRepair
                    }
                    pirateShip.splice(idxRepair, 0, repairedSection)
                }
                break
            } else if (command == "Status") {
                let count = 0
                let status = maxHP * 0.20

                for (let section of pirateShip) {
                    if (section < status) {
                        count++
                    }
                }
                console.log(`${count} sections need repair.`);
                break
            }
        }
    }
    for (let pirate of pirateShip) {
        pirateShipSum += pirate
    }

    for (let war of warShip) {
        warShipSum += war
    }
    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`);
}

manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])