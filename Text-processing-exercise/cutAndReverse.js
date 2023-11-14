function cutAndReverse(str) {

    let firstHalf = []
    let secondHalf = []

    for (let i = 0; i < str.length / 2; i++) {
        firstHalf.push(str[i])
    }

    console.log(firstHalf.reverse().join(""))


    for (let i = str.length / 2; i < str.length; i++) {
        secondHalf.push(str[i])
    }

    console.log(secondHalf.reverse().join(""));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')