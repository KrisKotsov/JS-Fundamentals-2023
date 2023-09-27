function login(input) {

    let username = input[0]
    let realPass = ""
    let failedTry = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        realPass += username[i]
    }

    let guess = input[1]
    let index = 2

    while (guess != realPass) {
        failedTry++
        if (failedTry > 3) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');

        guess = input[index]
        index++
    }
    console.log(`User ${username} logged in.`);
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])