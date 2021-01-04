const message = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message;
}

function countDown(num) {
    while (num >= 0)
    console.log(num--) 
}