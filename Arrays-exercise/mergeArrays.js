function mergeArrays(arr1, arr2) {

    let thirdArr = []

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            thirdArr.push(Number(arr1[i]) + Number(arr2[i]))
        } else {
            thirdArr.push(arr1[i].toString() + arr2[i].toString())
        }
    }
    console.log(thirdArr.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11'])