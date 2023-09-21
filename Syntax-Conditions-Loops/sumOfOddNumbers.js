function sumOfOddNumbers(num) {

    let sum = 0
    let counter = num + 1

    for (let i = 1; i < counter; i += 2) {
        counter++
        sum += i
        console.log(i);
    }
    console.log(`Sum: ${sum}`);

}

sumOfOddNumbers(6)