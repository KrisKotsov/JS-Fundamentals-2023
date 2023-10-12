function palindromeIntegers(arr) {

    for (let curNum of arr) {
        let isPalindrome = checkIsPalindrome(curNum)
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num) {
        let numStr = String(num)
        let reversedStr = ""

        for (let i = numStr.length - 1; i >= 0; i--) {
            let curChar = numStr[i]
            reversedStr += curChar
        }

        let isPalindrome = numStr == reversedStr
        return isPalindrome
    }
}

palindromeIntegers([123, 323, 421, 121])