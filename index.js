function writeCards(namesArray, holiday) {
    let thankYou = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYou.push(`Thank you, ${namesArray[i]}, for the wonderful ${holiday} gift!`)
    }
    return thankYou;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--;
    }
}