function partyTime(arr) {

    let vips = []
    let regular = []

    while (arr[0] != "PARTY") {
        let codeInput = arr[0].charCodeAt(0)

        if (codeInput >= 48 && codeInput <= 57) {
            vips.push(arr.shift())
        } else {
            regular.push(arr.shift())
        }
    }

    arr.shift()

    for (let guest of arr) {
        if (vips.includes(guest)) {
            let index = vips.indexOf(guest)
            vips.splice(index, 1)
        } else if (regular.includes(guest)) {
            let index = regular.indexOf(guest)
            regular.splice(index, 1)
        }
    }

    console.log(vips.length + regular.length);
    vips.forEach((el) => console.log(el))
    regular.forEach((el) => console.log(el))
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])