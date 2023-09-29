function reverseAnArrayOfNumbers(n, arr) {

    let reversedArray = []

    for (let i = n - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    console.log(reversedArray.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])