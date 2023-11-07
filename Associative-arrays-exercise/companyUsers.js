function companyUsers(arr) {

    let companyEmplyees = {}

    for (let el of arr) {
        let [name, employee] = el.split(" -> ")

        if (name in companyEmplyees) {
            if (!companyEmplyees[name].includes(employee)) {
                companyEmplyees[name].push(employee)
            }
        } else {
            companyEmplyees[name] = [employee]
        }
    }

    let entries = Object.entries(companyEmplyees).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, employeesIds] of entries) {
        console.log(name);
        employeesIds.forEach(id => console.log(`-- ${id}`))
    }
}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])