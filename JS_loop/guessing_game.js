const write=require('readline-sync')
let number=11
var i=1
console.log()
console.log('You have 5 π chances for guess the Number ')
console.log('You have to guess that number between 1 to 20 ')
console.log()
while (i<=5){
    console.log('This is your ',i,' chance π')
    let num=write.questionInt(' π€ guess number : ')
    console.log()
    if (number==num){
        console.log('Great!π₯³π₯³ you guess right number')
        break
    }
    else{
        console.log('wrong guessπ please try again π')
        console.log()
    }
    i++
} 