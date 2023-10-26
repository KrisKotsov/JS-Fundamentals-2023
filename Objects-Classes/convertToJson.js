function convertToJson(name, lastName, hairColor) {

    let person = {}

    person.name = name
    person.lastName = lastName
    person.hairColor = hairColor

    console.log(JSON.stringify(person))

}

convertToJson('George', 'Jones',
    'Brown')