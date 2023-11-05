function addressBook(arr) {

    let addressBookObj = {}

    for (let el of arr) {
        let tokens = el.split(":")
        let [name, address] = tokens

        addressBookObj[name] = address
    }

    let sortedObj = {}

    let addressArr = Object.entries(addressBookObj)
    addressArr.sort(([a], [b]) => a.localeCompare(b))

    sortedObj = Object.fromEntries(addressArr)

    for (let [key, value] of Object.entries(sortedObj)) {
        console.log(key, "->", value);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])