// const read=require('readline-sync')
// let number=10
// var i=1
// var sum=0
// while (i<=number){
//     let num=read.questionInt('Enter number : ')
//     sum=sum+num
//     i++
// }
// console.log(sum)





const read=require('readline-sync')
let number=41
var i=50
var sum=0
while (i>=number){
    let num=read.questionInt('Enter number : ')
    sum=sum+num
    i--
}
console.log(sum)