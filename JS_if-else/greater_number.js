const write=require('prompt-sync')();
let num1=write('Enter first number : ')
let num2=write('Enter second number : ')
if (num1>num2){
    console.log(num1, 'is greater')
}
else{
    console.log(`${num2}, is greater`)  //we can write like this also ${num2} in side the  Backticks.
}