function hero(input) {

    let heroes = {}

    let command = input.shift()

    while (command != "End") {
        let tokens = command.split(" ")
        let action = tokens[0]
        let heroName = tokens[1]
        let spellName = tokens[2]

        if (action == "Enroll") {
            if (heroName in heroes) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroes[heroName] = {}
            }
        } else if (action == "Learn") {
            if (!(heroName in heroes)) {
                console.log(`${heroName} doesn't exist.`);
            }
            else if (heroes[heroName].hasOwnProperty(spellName)) {
                console.log(`${heroName} has already learnt ${spellName}.`);
            } else {
                heroes[heroName][spellName] = true
            }
        } else if (action == "Unlearn") {
            if (!(heroName in heroes)) {
                console.log(`${heroName} doesn't exist.`);
            } else if (!heroes[heroName].hasOwnProperty(spellName)) {
                console.log(`${heroName} doesn't know ${spellName}.`);
            } else {
                delete heroes[heroName][spellName]
            }
        }
        command = input.shift()
    }


    console.log('Heroes:');

    for (let entries of Object.entries(heroes)) {
        let [name, spells] = entries
        console.log(`== ${name}: ${Object.keys(spells).join(", ")}`);
    }
}

hero(["Enroll Stefan",

    "Enroll Peter",

    "Enroll Stefan",

    "Learn Stefan ItShouldWork",

    "Learn John ItShouldNotWork",

    "Unlearn George Dispel",

    "Unlearn Stefan ItShouldWork",

    "End"])