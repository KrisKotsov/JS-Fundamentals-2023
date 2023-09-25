function integerAndFloat(a, b, c) {

    let sum = a + b + c

    if (sum % 1 != 0) {
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }
}

integerAndFloat(100, 200, 303)