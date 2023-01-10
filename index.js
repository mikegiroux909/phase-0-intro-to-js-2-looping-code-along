// Code your solutions in this file
function countDown(num){
    while(num >= 0){
        console.log(num);
        num = num-1;
    }
}
function writeCards(names, string){
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}