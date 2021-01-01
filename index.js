// Code your solutions in this file


function writeCards(namesArray, message) {
    let result = []
    for (let i = 0; i < namesArray.length; i++ ) {   
        result.push(`Thank you, ${namesArray[i]}, for the wonderful ${message} gift!`)
    };   
    return result
}

// function writeCards(arr) {
//     for (let i = 0; i < arr.length; i++ ) {
//         let deepArr = arr[i];
//         for(let j = 0; j < deepArr.length; j++ ) {
//         console.log(`Thank you, ${arr[i]}, for the wonderful ${deepArr[j]} gift!`); 
//         }
//     };   
//     return arr
// }



function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}