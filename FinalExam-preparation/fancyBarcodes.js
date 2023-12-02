function fancyBarcodes(input) {

    let lines = Number(input.shift())

    let pattern = /@#+(?<item>[A-Z][A-Za-z\d]{4,}[A-Z])@#+/

    let match
    for (let i = 0; i < lines; i++) {
        let currentLine = input[i]
        match = pattern.exec(currentLine)

        if (match) {
            let { item } = match.groups
            let digits = item.match(/\d/g)
            let group = digits ? digits.join("") : "00"
            console.log(`Product group: ${group}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])