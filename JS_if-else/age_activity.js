const read=require('readline-sync')
let age=read.question('Enter your age : ')
if (age>=5){
    console.log('you can go to school.')
}
if (age>=18){
    console.log('you can vote in elections.')
}
if (age>=21){
    console.log('you can drive a car.')
}
if (age>=24){
    console.log('you can marry.')
}
if (age>=25){
    console.log('you can legally drink.')
}