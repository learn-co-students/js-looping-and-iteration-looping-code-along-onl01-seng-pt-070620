function writeCards(names, occasion) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return cards
}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int --
    }
}