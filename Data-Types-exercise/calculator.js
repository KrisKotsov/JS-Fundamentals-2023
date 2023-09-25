function calculator(num, operator, numTwo) {

    switch (operator) {
        case "+": console.log((num + numTwo).toFixed(2)); break;
        case "-": console.log((num - numTwo).toFixed(2)); break;
        case "*": console.log((num * numTwo).toFixed(2)); break;
        case "/": console.log((num / numTwo).toFixed(2)); break;
    }
}

calculator(5,

    '+',

    10)