function searchForANumber(arrOne, arrTwo) {

    let cutIndex = arrTwo[0]
    let deleteCount = arrTwo[1]
    let searchedNum = arrTwo[2]

    let newArr = arrOne.slice(0, cutIndex)
    newArr.splice(0, deleteCount)

    let count = 0

    for (let el of newArr) {
        if (el == searchedNum) {
            count++
        }
    }

    console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForANumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5])