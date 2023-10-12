function sumFirstAndLast(arr) {

    let first = arr.shift()
    let last = arr.pop()

    console.log(Number(first) + Number(last));
}

sumFirstAndLast(['20', '30', '40'])