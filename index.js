const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
}

function wrapGiftWithWhile(gifts){
    let i = 0;
    while (i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
}


function writeCards(names,event){
    let cards = [];
    for(let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(num){
    for(let i = num; i >= 0; i--){
        console.log(i);
    }
}

// function happyBirthday(){
//     for(let age = 30; age < 40; age++)
//     {
//         console.log(`I'm ${age} years old. Happy birthday to me!` );
//     }
//     return gifts;
// }
