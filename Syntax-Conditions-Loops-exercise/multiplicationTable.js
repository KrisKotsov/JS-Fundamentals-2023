function multiplicationTable(num) {

    for (let i = num; i <= num; i++) {
        for (let j = 1; j <= 10; j++) {
            let sum = i * j
            console.log(`${i} X ${j} = ${sum}`);
        }
    }
}

multiplicationTable(10)