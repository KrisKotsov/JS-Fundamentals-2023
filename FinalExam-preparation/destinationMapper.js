function destinationMapper(input) {

    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g
    let buff = ""
    let travelPoints = 0

    let match;

    while ((match = pattern.exec(input)) !== null) {
        let { location } = match.groups

        travelPoints += location.length
        buff += location + ", "
    }

    buff = buff.slice(0, -2)
    console.log(`Destinations: ${buff}`)
    console.log(`Travel Points: ${travelPoints}`);

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")