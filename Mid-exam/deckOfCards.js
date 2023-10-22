function deckOfCards(arr) {

    let deck = arr.shift().split(", ")
    let n = Number(arr.shift())

    while (n > 0) {
        let sequence = arr.shift().split(", ")
        let command = sequence[0]

        if (command == "Add") {
            let card = sequence[1]
            if (deck.includes(card)) {
                console.log('Card is already in the deck');
                n--
                continue
            } else {
                deck.push(card)
                console.log('Card successfully added');
            }
        } else if (command == "Remove") {
            let card = sequence[1]
            let idx = deck.indexOf(card)

            if (deck.includes(card)) {
                deck.splice(idx, 1)
                console.log('Card successfully removed');
            } else {
                console.log('Card not found');
                n--
                continue
            }
        } else if (command == "Remove At") {
            let idx = Number(sequence[1])
            if (idx < 0 || idx > deck.length) {
                console.log('Index out of range');
            } else {
                deck.splice(idx, 1)
                console.log('Card successfully removed');
            }
        } else if (command == "Insert") {
            let idx = Number(sequence[1])
            let card = sequence[2]
            if (idx < 0 || idx > deck.length) {
                console.log('Index out of range');
            } else if (deck.includes(card)) {
                console.log('Card is already added');
            } else {
                deck.splice(idx, 0, card)
                console.log('Card successfully added');
            }
        }
        n--
    }
    console.log(deck.join(", "));
}

deckOfCards((["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]))