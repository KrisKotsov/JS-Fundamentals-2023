function experienceGaining(arr) {

    let neededXP = arr.shift()
    let countOfBattles = arr.shift()

    let battlesCounter = 0
    let sum = 0

    for (i = 0; i < countOfBattles; i++) {
        let xp = arr[i]
        battlesCounter++

        if (battlesCounter % 3 == 0) {
            sum += xp * 1.15
        } else if (battlesCounter % 5 == 0) {
            sum += xp * 0.90
        }
        else if (battlesCounter % 15 == 0) {
            sum += xp * 1.05
        } else {
            sum += xp
        }
        if (sum >= neededXP) {
            console.log(`Player successfully collected his needed experience for ${battlesCounter} battles.`);
            return
        }
    }

    console.log(`Player was not able to collect the needed experience, ${(neededXP - sum).toFixed(2)} more needed.`);
}

experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20])