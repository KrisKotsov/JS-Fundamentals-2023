function passwordValidator(password) {
    let isValidLength = checkPassLength(password)
    let isLetterOrNum = isItLetterOrNum(password)
    let twoDigits = isTwoDigits(password)

    if (isValidLength && isLetterOrNum && twoDigits) {
        console.log('Password is valid');
    }

    function checkPassLength(password) {
        if (password.length < 6 || password.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            return false
        } else {
            return true
        }
    }

    function isItLetterOrNum(password) {
        for (let el of password) {
            let code = el.charCodeAt(0)

            if (!((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
                console.log("Password must consist only of letters and digits");
                return false
            }
        }
        return true
    }

    function isTwoDigits(password) {
        let digits = 0

        for (let char of password) {
            let code = char.charCodeAt(0)

            if (code >= 48 && code <= 57) {
                digits++
            }
        }
        if (digits < 2) {
            console.log("Password must have at least 2 digits");
            return false
        } else {
            return true
        }
    }

}

passwordValidator('Pa$s$s')