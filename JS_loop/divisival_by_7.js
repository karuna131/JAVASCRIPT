const read=require('readline-sync')
let number=read.questionInt('Enter last limit number : ')
var i=1
while (i<=number){
    if (i%7==0){
        console.log(i)                      // print number which is divisible by only 7
    }
    i++
}




// var number=21
// var i=1
// while (i<=number){
//     if (i%3==0 && i%7==0){                     // print number which is divisible by 3 and 7
//         console.log('Navgurukul')
//     }
//     else if (i%3==0){                                    // print number which is divisible by 3
//         console.log('Nav')
//     }
//     else if (i%7==0){
//         console.log('Gurukul')                      // print number which is divisible by  7
//     }
//     else{
//         console.log(i)
//     }
//     i++
// }
