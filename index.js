let cards = []

function writeCards(names, occassion) {
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`);
  }
 
  return cards;
}
 

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}