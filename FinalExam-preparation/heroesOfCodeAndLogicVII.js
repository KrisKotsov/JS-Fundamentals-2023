function heroesOfCodeAndLogic(input) {

    let heroesCount = Number(input.shift())
    let heroes = {}

    for (let i = 0; i < heroesCount; i++) {
        let tokens = input.shift()
        tokens = tokens.split(" ")
        let heroName = tokens[0]
        let hp = Number(tokens[1])
        let mana = Number(tokens[2])

        let hero = { hp: hp, mana: mana }

        heroes[heroName] = hero
    }

    let command = input.shift()

    while (command != "End") {
        let tokens = command.split(" - ")
        let action = tokens[0]
        let name = tokens[1]
        let hero = heroes[name]

        if (action == "CastSpell") {
            let neededMana = Number(tokens[2])
            let spellName = tokens[3]

            if (hero.mana >= neededMana) {
                hero.mana -= neededMana
                console.log(`${name} has successfully cast ${spellName} and now has ${hero.mana} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        } else if (action == "TakeDamage") {
            let damage = Number(tokens[2])
            let attacker = tokens[3]

            hero.hp -= damage

            if (hero.hp > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
            } else {
                delete heroes[name]
                console.log(`${name} has been killed by ${attacker}!`);
            }

        } else if (action == "Recharge") {
            let amount = Number(tokens[2])
            let startingMana = hero.mana
            hero.mana += amount

            if (hero.mana > 200) {
                hero.mana = 200
                console.log(`${name} recharged for ${200 - startingMana} MP!`);
            } else {
                console.log(`${name} recharged for ${amount} MP!`);
            }
        } else if (action == "Heal") {
            let amount = Number(tokens[2])
            let startingHp = hero.hp
            hero.hp += amount

            if (hero.hp > 100) {
                hero.hp = 100
                console.log(`${name} healed for ${100 - startingHp} HP!`);
            } else {
                console.log(`${name} healed for ${amount} HP!`);
            }
        }

        command = input.shift()
    }

    for (let name in heroes) {
        let hero = heroes[name]

        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mana}`);
    }
}

heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])