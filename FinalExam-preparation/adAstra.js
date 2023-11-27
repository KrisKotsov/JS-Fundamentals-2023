function adAstra(input) {

    let str = input.shift()
    let counterDays = 0
    let totalCalories = 0
    let neededCalories = 2000

    let pattern = /([\|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let match;
    let foods = []

    while ((match = pattern.exec(str)) !== null) {
        let { name, date, calories } = match.groups
        calories = Number(calories)

        totalCalories += calories

        foods.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`)
    }

    counterDays = Math.floor(totalCalories / neededCalories)

    console.log(`You have food to last you for: ${counterDays} days!`);

    for (let el of foods) {
        console.log(el);
    }
}

adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]
)