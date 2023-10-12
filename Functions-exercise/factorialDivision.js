function factorialDivision(num1, num2) {

    let resultOne = divided(num1)
    let resultTwo = divided(num2)
    let resultTotal = resultOne / resultTwo

    function divided(num) {
        for (let divisor = num - 1; divisor > 1; divisor--) {
            num = num * divisor
        }

        return num
    }

    console.log(resultTotal.toFixed(2));
}

factorialDivision(6, 2)