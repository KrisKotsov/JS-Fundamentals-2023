function passwordReset(input) {

    let pass = input.shift()
    let rawPassword = ""
    let command = input.shift()

    while (command != "Done") {
        let tokens = command.split(" ")
        let action = tokens[0]

        if (action == "TakeOdd") {
            for (let i = 1; i < pass.length; i += 2) {
                rawPassword += pass[i]
            }
            pass = rawPassword
            console.log(pass)
        } else if (action == "Cut") {
            let idx = Number(tokens[1])
            let lgth = Number(tokens[2])
            let cutted = pass.substring(idx, idx + lgth)

            pass = pass.replace(cutted, "")
            console.log(pass);
        } else if (action == "Substitute") {
            let substr = tokens[1]
            let substitute = tokens[2]

            if (pass.includes(substr)) {
                let parts = pass.split(substr)

                pass = parts.join(substitute)
                console.log(pass);
            } else {
                console.log('Nothing to replace!');
            }
        }

        command = input.shift()
    }
    console.log(`Your password is: ${pass}`);
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]))