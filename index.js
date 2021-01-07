function writeCards(NameArray, event) {
    let cards = []
    for (let i = 0; i < NameArray.length; i++) {
        cards.push(`Thank you, ${NameArray[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(integer) { 
    while (integer > 0) {
        console.log(integer);
        integer--;
    }
    console.log(integer)
}
