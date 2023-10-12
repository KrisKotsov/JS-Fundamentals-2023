function perfectNumber(num) {

    let sum = 0

    for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor == 0) {
            sum += divisor
        }
    }
    if (sum == num) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(28)