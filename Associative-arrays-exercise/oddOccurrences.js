function oddOccurrences(str) {

    let splitedStr = str.toLowerCase().split(" ")
    let wordsCount = {}
    let newArr = []

    splitedStr.forEach(word => {
        wordsCount[word] = (wordsCount[word] || 0) + 1
    })

    splitedStr.forEach(word => {
        if (wordsCount[word] % 2 !== 0 && newArr.indexOf(word) == -1) {
            newArr.push(word)
        }
    })

    console.log(newArr.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')