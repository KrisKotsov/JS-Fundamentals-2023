function softUniReception(arr) {

    let firstEmployee = Number(arr[0])
    let secondEmployee = Number(arr[1])
    let thirdEmployee = Number(arr[2])
    let studentsCount = Number(arr[3])

    let workingRatePerHour = firstEmployee + secondEmployee + thirdEmployee
    let counterHours = 0

    while (studentsCount > 0) {
        counterHours++
        studentsCount -= workingRatePerHour

        if (counterHours % 4 == 0) {
            counterHours++
            continue
        }
    }
    console.log(`Time needed: ${counterHours}h.`);
}

softUniReception(['3', '2', '5', '40'])