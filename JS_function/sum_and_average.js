const write=require('readline-sync');
function average(num1,num2,num3){
    sum=num1+num2+num3
    console.log('sum of this numbers : ',sum)
    console.log('and average of this numbers ',sum/3)

}
var a=write.questionInt('Enter first number : ')
var b=write.questionInt('Enter second number : ')
var c=write.questionInt('Enter third number : ')
average(a,b,c)