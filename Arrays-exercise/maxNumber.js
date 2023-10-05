function maxNumber(arr) {

    let topIntegers = [];
    for (let i = 0; i < arr.length; i++) {
        let isTopInteger = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger) {
            topIntegers.push(arr[i]);
        }
    }
    console.log(topIntegers.join(" "));
}

maxNumber([27, 19, 42, 2, 13, 45, 48])