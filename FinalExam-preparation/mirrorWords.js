function mirrorWords(input) {

    let str = input.join("")

    let regex = /([@#])([a-zA-Z]{3,})\1{2}([a-zA-Z]{3,})\1/g
    let match;
    let count = 0
    const extractedWords = [];

    while ((match = regex.exec(str)) !== null) {
        count++
        let first = match[2]
        let second = match[3]

        if (first == second.split("").reverse().join("")) {
            extractedWords.push(`${first} <=> ${second}`)
        }
    }

    if (count == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${count} word pairs found!`);
    }

    if (extractedWords.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(extractedWords.join(", "));
    }
}

mirrorWords([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'

])