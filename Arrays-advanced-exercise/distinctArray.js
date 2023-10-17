function distinctArray(arr) {

    let newArr = arr.filter((el, i) => arr.indexOf(el) == i)
    console.log(newArr.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3,
    4, 1, 2])