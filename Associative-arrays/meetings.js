function meetings(arr) {

    let meetingsObj = {}

    for (let el of arr) {
        let tokens = el.split(" ")
        let [day, name] = tokens

        if (day in meetingsObj) {
            console.log(`Conflict on ${day}!`);
            continue
        }

        meetingsObj[day] = name
        console.log(`Scheduled for ${day}`);
    }

    for (let [key, value] of Object.entries(meetingsObj)) {
        console.log(key, "->", value);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])