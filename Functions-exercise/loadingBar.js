function loadingBar(num) {

    let percentage = "%".repeat(num / 10)
    let dots = ".".repeat(10 - num / 10)

    if (num == 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${percentage}]`);
    } else {
        console.log(`${num}% [${percentage}${dots}]`);
        console.log('Still loading...');
    }
}

loadingBar(30)