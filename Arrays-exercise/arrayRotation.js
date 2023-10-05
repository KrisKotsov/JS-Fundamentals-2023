function arrayRotation(arr, rotation) {

    for (i = 0; i < rotation; i++) {
        arr.push(arr[0])
        arr.shift()
    }

    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 0)