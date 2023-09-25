function amazingNumbers(num) {

    let sum = 0
    let char = String(num)

    for (let i = 0; i < char.length; i++) {
        sum += Number(char[i])
    }

    if (String(sum).includes(9)) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }


}

amazingNumbers(999)