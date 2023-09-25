function requiredReading(pages, pagesInHour, days) {

    let totalTime = pages / pagesInHour

    let requiredHours = totalTime / days

    console.log(requiredHours);


}

requiredReading(432,

    15,

    4)