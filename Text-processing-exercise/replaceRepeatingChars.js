function replaceRepeatingChars(str) {

    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] !== str[i]) {
            newStr += str[i]
        }
    }
    console.log(newStr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')