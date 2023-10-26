function convertToObject(jsonStr) {

    let parsedStr = JSON.parse(jsonStr)

    for (let [key, value] of Object.entries(parsedStr)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject(
    '{"name": "George", "age": 40, "town": "Sofia"}'
)