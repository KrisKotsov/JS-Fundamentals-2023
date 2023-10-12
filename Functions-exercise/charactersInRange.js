function charactersInRange(char1, char2) {

    let charOneAsNum = char1.charCodeAt()
    let charTwoAsNum = char2.charCodeAt()

    let result = ""

    let minCode = Math.min(charOneAsNum, charTwoAsNum)
    let maxCode = Math.max(charOneAsNum, charTwoAsNum)

    for (let i = minCode + 1; i < maxCode; i++) {
        let curChar = String.fromCharCode(i)
        result += curChar + " "
    }
    console.log(result);
}

charactersInRange('a',

    'd')