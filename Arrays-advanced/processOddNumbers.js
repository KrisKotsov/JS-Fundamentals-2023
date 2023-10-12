function processOddNumbers(arr) {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            let curNum = arr[i]
            curNum = curNum * 2
            newArr.push(curNum)
        }
    }

    console.log(newArr.reverse().join(" "));
}

processOddNumbers([3, 0, 10, 4, 7, 3])