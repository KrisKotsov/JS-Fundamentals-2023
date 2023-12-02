function worldTour(input) {

    let stops = input.shift()

    let command = input.shift()

    while (command != "Travel") {
        let tokens = command.split(":")
        let action = tokens[0]

        if (action == "Add Stop") {
            let idx = Number(tokens[1])
            let destination = tokens[2]

            if (idx >= 0) {
                stops = stops.split("")
                destination = destination.split("")
                stops.splice(idx, 0, ...destination)
                stops = stops.join("")
            }
            console.log(stops);
        } else if (action == "Remove Stop") {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])

            if (startIdx >= 0 && endIdx < stops.length) {
                let del = stops.slice(startIdx, endIdx + 1)

                stops = stops.replace(del, "")
            }
            console.log(stops);
        } else if (action == "Switch") {
            let oldStr = tokens[1]
            let newStr = tokens[2]

            if (stops.includes(oldStr)) {
                let parts = stops.split(oldStr)
                stops = parts.join(newStr)
            }
            console.log(stops);
        }

        command = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))