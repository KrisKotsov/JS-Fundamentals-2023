function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let currNum = i
        let sum = 0
        while (currNum > 0) {
            sum += currNum % 10;
            currNum = Math.trunc(currNum / 10)
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

}

specialNumbers(15)