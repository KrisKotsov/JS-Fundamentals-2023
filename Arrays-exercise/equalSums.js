function equalSums(arr) {

    let totalSum = 0
    let leftSum = 0
    let index = "no"

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i]
    }

    for (let i = 0; i < arr.length; i++) {
        totalSum -= arr[i]

        if (leftSum == totalSum) {
            index = i;
            break;
        }

        leftSum += arr[i]
    }
    console.log(index);
}

equalSums([10, 5, 5, 99,

    3, 4, 2, 5, 1,

    1, 4])