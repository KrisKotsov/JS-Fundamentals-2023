function bossRush(input) {

    let lines = Number(input.shift())
    let match

    for (let i = 0; i < lines; i++) {
        let command = input[i]

        let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[a-zA-Z]+\s[a-zA-Z]+)#/g

        match = pattern.exec(command)
        if (match) {
            let { boss, title } = match.groups

            let strength = boss.length
            let armor = title.length

            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        } else {
            console.log('Access denied!');
        }
    }
}

bossRush((['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']))