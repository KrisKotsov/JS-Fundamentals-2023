function sortByTwo(arr) {

    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sortedArr.join("\n"));
}

sortByTwo(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])