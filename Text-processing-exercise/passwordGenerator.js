function passwordGenerator(arr) {

    let [sequence, sequence2, word] = arr
    let vowels = ["a", "e", "i", "o", "u"]

    let finalSequence = sequence.concat(sequence2)
    let idx = 0

    for (let el of finalSequence) {
        if (vowels.includes(el)) {
            finalSequence = finalSequence.replace(el, word[idx].toUpperCase())
            idx++

            if (idx >= word.length) {
                idx = 0
            }
        }
    }
    console.log(`Your generated password is ${finalSequence.split("").reverse().join("")}`);
}

passwordGenerator([

    'ilovepizza',

    'ihatevegetables',

    'orange'

])