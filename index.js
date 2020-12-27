// Code your solutions in this file
const writeCards = (friends, event) => {
    const newArray = []
    for(let i = 0; i < friends.length; i++){
        newArray[i] = `Thank you, ${friends[i]}, for the wonderful ${event} gift!`
    }
    return newArray
}

const countDown = (num) => {
    while (num >= 0){
        console.log(num)
        num--
    }
}