const read=require('readline-sync')
let number=read.questionInt('Enter last limit number : ')
var i=1
var sum=0
while (i<=number){
    sum=sum+i
    i++
}
console.log(sum)