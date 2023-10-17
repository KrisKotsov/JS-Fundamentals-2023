function gladiatorInventory(arr) {

    let inventory = arr.shift().split(" ")

    for (let el of arr) {
        let commandsArr = el.split(" ")
        let command = commandsArr[0]

        while (commandsArr.length > 0) {
            if (command == "Buy") {
                if (inventory.includes(commandsArr[1])) {
                    break
                } else {
                    inventory.push(commandsArr[1])
                }
                break
            } else if (command == "Trash") {
                if (inventory.includes(commandsArr[1])) {
                    let idxToTrash = inventory.indexOf(commandsArr[1])
                    inventory.splice(idxToTrash, 1)
                } else {
                    break
                }
                break
            } else if (command == "Repair") {
                if (inventory.includes(commandsArr[1])) {
                    let idxToRepair = inventory.indexOf(commandsArr[1])
                    let repaired = inventory.splice(idxToRepair, 1)
                    inventory.push(...repaired)
                } else {
                    break
                }
                break
            } else if (command == "Upgrade") {
                let upgradeCmd = commandsArr[1].split("-")
                let upgradeStr = upgradeCmd[0] + ":" + upgradeCmd[1]
                let idxToUpgrade = inventory.indexOf(upgradeCmd[0])

                if (inventory.includes(upgradeCmd[0])) {
                    inventory.splice(idxToUpgrade + 1, 0, upgradeStr)
                } else {
                    break
                }
                break
            }
        }
    }
    console.log(inventory.join(" "));

}

gladiatorInventory(['SWORD Shield Spear',

    'Trash Bow',

    'Repair Shield',

    'Upgrade Helmet-V'])