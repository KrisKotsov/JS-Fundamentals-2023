function reversedChars(chOne, chTwo, chThree) {

    let str = chOne + chTwo + chThree
    let buff = ""

    for (i = str.length - 1; i >= 0; i--) {
        buff += str[i] + " "
    }
    console.log(buff);
}

reversedChars("A", "B", "C")