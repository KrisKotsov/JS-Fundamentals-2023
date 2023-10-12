function matrix(num) {

    for (let i = 1; i <= num; i++) {
        let curRow = `${num} `.repeat(num)

        console.log(curRow);
    }
}

matrix(3)