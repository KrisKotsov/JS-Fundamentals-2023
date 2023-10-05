let simpleCalculator = (num1, num2, operator) => {
    switch (operator) {
        case "multiply": return num1 * num2
        case "divide": return num1 / num2
        case "add": return num1 + num2
        case "subtrace": return num1 - num2
    }
}

const callFunction = simpleCalculator(2, 3, "add")
console.log(callFunction);