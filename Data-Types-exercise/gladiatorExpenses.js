function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;

    let totalExpenses = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            helmetCount += helmetPrice
        } if (i % 3 == 0) {
            swordCount += swordPrice
        } if (i % 6 == 0) {
            shieldCount += shieldPrice
        } if (i % 12 == 0) {
            armorCount += armorPrice
        }
    }
    totalExpenses = helmetCount + swordCount + shieldCount + armorCount

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7,

    2,

    3,

    4,

    5)