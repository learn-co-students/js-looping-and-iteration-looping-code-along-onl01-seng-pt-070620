// Code your solutions in this file
let thankYous = []
function writeCards(cards, event) {
for (let i = 0; i < cards.length; i++) {
    thankYous.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
  }
  return thankYous;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
