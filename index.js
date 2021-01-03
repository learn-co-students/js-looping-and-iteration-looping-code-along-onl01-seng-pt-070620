// Code your solutions in this file
function writeCards(array, holiday) {
    let cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${holiday} gift!`);
    }
    return cards;
}

function countDown(number) {
    let i = 11;
    while (i > 0) {
        console.log(i-=1);
    }
}