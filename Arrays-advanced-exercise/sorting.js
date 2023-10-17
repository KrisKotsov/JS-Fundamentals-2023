function sorting(arr) {

    arr.sort((a, b) => b - a)

    let result = []

    while (arr.length > 0) {
        if (result.length % 2 == 0) {
            result.push(arr.shift())
        } else {
            result.push(arr.pop())
        }
    }
    console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])