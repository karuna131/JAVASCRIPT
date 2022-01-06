// const read=require('readline-sync')                      // check number is divisible by 2 or not 
// let varx=read.questionInt('Enter a number : ')
// if (varx%2==0){
//     console.log('divisible hai')
// }
// else{
//     console.log('not divisible')
// }



// const read=require('readline-sync')                          // check number1 is divisible by number2 or not 
// let varx=read.questionInt('Enter a number : ')
// let vary=read.questionInt('Enter a number')
// if (varx%vary==0){
//     console.log('divisible')
// }
// else{
//     console.log('not divisible')
// }



const read=require('readline-sync')                      // check number is divisible by (5 or 15) both or  not 
let num=read.questionInt('Enter a number : ')
if (num%5==0 && num%15==0){
    console.log('divisible hai')
}
else{
    console.log('not divisible')
}
