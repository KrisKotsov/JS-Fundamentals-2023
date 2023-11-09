function legendaryFarming(str) {

    let keyMaterials = { shards: 0, fragments: 0, motes: 0 }

    let junkMaterials = {}

    let legendaries = { shards: "Shadowmourne", fragments: "Valanyr", motes: "Dragonwrath" }

    let materials = str.split(" ")

    for (let i = 0; i < materials.length; i += 2) {
        let qty = Number(materials[i])
        let tokens = materials[i + 1].toLowerCase()

        if (tokens in keyMaterials) {
            keyMaterials[tokens] += qty
            if (keyMaterials[tokens] >= 250) {
                let legendaryWon = legendaries[tokens]
                console.log(`${legendaryWon} obtained!`);
                keyMaterials[tokens] -= 250
                break
            }
        } else {
            if (tokens in junkMaterials) {
                junkMaterials[tokens] += qty
            } else {
                junkMaterials[tokens] = qty
            }
        }
    }

    let keyOrdered = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

    let junkOrdered = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [item, qty] of keyOrdered) {
        console.log(`${item}: ${qty}`);
    }

    for (let [item, qty] of junkOrdered) {
        console.log(`${item}: ${qty}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')