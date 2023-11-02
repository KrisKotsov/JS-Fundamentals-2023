function employees(arr) {

    let empLength = 0
    let empObj = {}

    for (let el of arr) {
        let employee = { name: el, personalNum: el.length }

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}

employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'])