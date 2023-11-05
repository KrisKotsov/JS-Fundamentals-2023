function phoneBook(arr) {

    let phoneBookObj = {}

    for (let el of arr) {
        let tokens = el.split(" ")

        let [name, number] = tokens

        phoneBookObj[name] = number
    }

    for (let [key, value] of Object.entries(phoneBookObj)) {
        console.log(key, "->", value);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])