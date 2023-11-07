function minerTask(arr) {

    let resources = {}

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i]
        let qty = Number(arr[i + 1])

        if (resource in resources) {
            resources[resource] += qty
        } else {
            resources[resource] = qty
        }
    }

    for (let [key, value] of Object.entries(resources)) {
        console.log(key, "->", value);
    }
}

minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])