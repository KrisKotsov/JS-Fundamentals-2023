function negativeOrPositive(arr) {

    let newArr = []

    let arrOfNums = arr.map(Number)

    for (let el of arrOfNums) {
        if (el < 0) {
            newArr.unshift(el)
        } else {
            newArr.push(el)
        }
    }

    for (let el of newArr) {
        console.log(el);
    }
}

negativeOrPositive(['7', '-2', '8', '9'])