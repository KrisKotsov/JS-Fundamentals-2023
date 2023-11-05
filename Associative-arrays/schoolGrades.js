function schoolGrades(arr) {

    let students = {}

    for (let el of arr) {
        let [name, ...grade] = el.split(" ")

        grade = grade.map(Number)

        if (name in students) {
            students[name].push(...grade)
        } else {
            students[name] = grade
        }
    }

    let studentsAverage = {}

    for (let [name, grades] of Object.entries(students)) {
        let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length
        studentsAverage[name] = average.toFixed(2)
    }

    let sortedStudets = Object.entries(studentsAverage).sort(([a], [b]) => a.localeCompare(b))

    let finalStudetsObj = Object.fromEntries(sortedStudets)

    for (let [key, value] of Object.entries(finalStudetsObj)) {
        console.log(`${key}: ${value}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])