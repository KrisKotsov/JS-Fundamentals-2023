function numbers(nums) {

    let arr = nums.split(" ")
    arr = arr.map(Number)

    let sum = 0
    let overAverage = []

    for (let num of arr) {
        sum += num
    }

    let average = (sum / arr.length).toFixed(2)

    for (let el of arr) {
        if (el > average) {
            overAverage.push(el)
        }
    }

    if (overAverage.length < 1) {
        console.log("No");
        return
    }

    overAverage.sort((a, b) => b - a)

    if (overAverage.length > 5) {
        console.log(overAverage.slice(0, 5).join(" "))
    } else {
        console.log(overAverage.join(" "));
    }
}

numbers('10 20 30 40 50')