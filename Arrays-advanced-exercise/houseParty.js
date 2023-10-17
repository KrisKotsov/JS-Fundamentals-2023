function houseParty(arr) {

    let goingGuests = []

    for (let el of arr) {
        let newStr = el.split(" ")
        let guestName = newStr[0]

        if (newStr.length < 4) {
            if (goingGuests.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                goingGuests.push(guestName)
            }
        } else {
            if (goingGuests.includes(guestName)) {
                goingGuests.pop()
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }
    }
    for (let guests of goingGuests) {
        console.log(guests);
    }

}

houseParty(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])