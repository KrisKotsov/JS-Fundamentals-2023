function songs(arr) {

    arr.shift()
    let lastEl = arr.pop()

    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    for (let el of arr) {
        let tokens = el.split("_")
        let typeList = tokens[0]
        let name = tokens[1]
        let time = tokens[2]

        let song = new Songs(typeList, name, time)

        if (lastEl == song.typeList) {
            console.log(song.name);
        } else if (lastEl == "all") {
            console.log(name);
        }
    }
}

songs([3,

    'favourite_DownTown_3:14',

    'favourite_Kiss_4:16',

    'favourite_Smooth Criminal_4:01',

    'favourite'])