function writeCards(names, holiday) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]} for the wonderful ${holiday} gift!`)
    }
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--;
    }
}