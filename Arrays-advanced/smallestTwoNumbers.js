function smallestTwoNums(arr) {

    arr.sort((a, b) => a - b)
    let slicedArr = arr.slice(0, 2)

    console.log(slicedArr.join(" "));
}

smallestTwoNums([3, 0, 10, 4, 7, 3])