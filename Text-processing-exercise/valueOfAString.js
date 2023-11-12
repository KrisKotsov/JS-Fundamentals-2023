function valueOfAString(arr) {

    let str = arr[0]
    let type = arr[1]
    let sum = 0

    for (let letter of str) {
        if (type == "LOWERCASE") {
            let lower = letter.charCodeAt()
            if (lower >= 97 && lower <= 122) {
                sum += lower
            }
        } else if (type == "UPPERCASE") {
            let upper = letter.charCodeAt()
            if (upper >= 65 && upper <= 90) {
                sum += upper
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['AC/DC',

    'UPPERCASE'])