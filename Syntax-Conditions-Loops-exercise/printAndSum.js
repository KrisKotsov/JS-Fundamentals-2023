function printAndSum(start, end) {

    let sum = 0
    let buff = ""

    for (i = start; i <= end; i++) {
        buff += i + " "
        sum += i
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)