function oddAndEvenSum(num) {

    let sumOfEven = 0
    let sumOfOdd = 0

    num = num.toString()

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            sumOfEven += Number(num[i])
        } else {
            sumOfOdd += Number(num[i])
        }
    }
    console.log(`Odd sum = ${sumOfOdd}, Even sum = ${sumOfEven}`);
}

oddAndEvenSum(1000435)