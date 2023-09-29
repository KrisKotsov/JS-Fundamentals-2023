function equalArrays(arr1, arr2) {

    let sumOfFirst = 0

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sumOfFirst += Number(arr1[i])
    }
    console.log(`Arrays are identical. Sum: ${sumOfFirst}`);
}

equalArrays(['1', '2', '3', '4', '5'],

    ['1', '2', '4', '4', '5'])