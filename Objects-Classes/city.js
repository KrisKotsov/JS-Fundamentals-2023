function city(city) {

    // let keys = Object.keys(city)

    // for (let key of Object.keys(city)) {
    //     console.log(key, "->", city[key]);
    // }

    for (let [key, value] of Object.entries(city)) {
        console.log(key, "->", value);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})