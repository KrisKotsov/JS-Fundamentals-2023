function inventory(arr) {

    let newArr = []

    for (let el of arr) {
        let tokens = el.split(" / ")
        let name = tokens[0]
        let heroLevel = Number(tokens[1])
        let items = tokens[2]

        let hero = { name: name, level: heroLevel, items: items }
        newArr.push(hero)
    }
    newArr.sort((a, b) => a.level - b.level)
    newArr.map((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}

inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'])