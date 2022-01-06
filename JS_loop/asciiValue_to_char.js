const read=require('readline-sync')
let num=read.questionInt('Enter number : ')
//var ascii_number= num+64
var a=String.fromCharCode(num+64);      
console.log(a)