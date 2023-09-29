function evenAndOddSubstraction(arr) {

    let sumOfEven = 0
    let sumOfOdd = 0

    for (let el of arr) {
        if (el % 2 == 0) {
            sumOfEven += el
        } else {
            sumOfOdd += el
        }
    }
    console.log(sumOfEven - sumOfOdd);
}

evenAndOddSubstraction([3, 5, 7, 9])