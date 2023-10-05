function addAndSubstract(arr) {

    let newArr = []
    let sumOfOld = 0
    let sumOfNew = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i] + i)
        } else {
            newArr.push(arr[i] - i)
        }
        sumOfOld += arr[i]
        sumOfNew += newArr[i]
    }
    console.log(newArr);
    console.log(sumOfOld);
    console.log(sumOfNew);
}

addAndSubstract([5, 15, 23, 56, 35])