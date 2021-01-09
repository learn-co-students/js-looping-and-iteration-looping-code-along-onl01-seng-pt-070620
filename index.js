// Code your solutions in this file


function writeCards(peeps, event) {
  let cards = []
  for (let i =0; i < peeps.length; i++)
  {cards.push(`Thank you, ${peeps[i]}, for the wonderful ${event} gift!`);}
  return cards
  
}

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}