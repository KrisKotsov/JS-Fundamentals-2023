function theLift(arr) {

    let waitingPeople = Number(arr.shift())

    for (let el of arr) {
        let liftState = el.split(" ").map(Number)

        for (let i = 0; i < liftState.length; i++) {

            while (liftState[i] < 4 && waitingPeople > 0) {
                liftState[i]++
                waitingPeople--
            }
            if (waitingPeople == 0 && liftState[i] == 4) {
                console.log(liftState.join(" "));
                return
            }
        }

        if (waitingPeople == 0) {
            console.log(`The lift has empty spots!\n${liftState.join(" ")}`);
        } else {
            console.log(`There isn't enough space! ${waitingPeople} people in a queue!\n${liftState.join(" ")}`);
        }
    }
}

theLift([
    "20",
    "0 0 0 0 0"
])