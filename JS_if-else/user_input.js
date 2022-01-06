// const read=require('readline-sync')
// let i=read.question('Enter a number : ')

const ps = require('prompt-sync')();
//let prom = ps()
let num=ps('Enter any number : ')
if (num<10){
    console.log('number is less than 10')
}
else if (num>10 && num<20){
    console.log('number is less than 20')
}
else{
    console.log('greater than 20')
}