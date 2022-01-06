// const read = require('readline-sync')
// let num = read.question('Enter a number : ')
// var num1 = 300 - 123
// if (num==num1){
//     console.log('equal')
// }else{
//     console.log('not equal')
// }




const ps = require('prompt-sync')();
//let prom = ps()
let number1 = ps('Enter number : ')
var number2 = 44 * 30
if (number1>=number2){
    console.log('number2 is greater than or equal')
}
else{
    console.log('number2 is lesser')
}