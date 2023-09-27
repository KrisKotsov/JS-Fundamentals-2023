function vacation(group, type, day) {

    let priceForOne = 0
    let totalPrice = 0

    if (type == "Students") {
        switch (day) {
            case "Friday": priceForOne = 8.45; break;
            case "Saturday": priceForOne = 9.80; break;
            case "Sunday": priceForOne = 10.46; break;
        }
    } else if (type == "Business") {
        switch (day) {
            case "Friday": priceForOne = 10.90; break;
            case "Saturday": priceForOne = 15.60; break;
            case "Sunday": priceForOne = 16; break;
        }
    } else if (type == "Regular") {
        switch (day) {
            case "Friday": priceForOne = 15; break;
            case "Saturday": priceForOne = 20; break;
            case "Sunday": priceForOne = 22.50; break;
        }
    }
    totalPrice = group * priceForOne

    if (type == "Students" && group >= 30) {
        totalPrice = totalPrice * 0.85
    } else if (type == "Business" && group >= 100) {
        totalPrice = (group - 10) * priceForOne
    } else if (type == "Regular" && (group >= 10 && group <= 20)) {
        totalPrice = totalPrice * 0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,

    "Students",

    "Sunday")