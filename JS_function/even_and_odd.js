const read=require('readline-sync');
function enven_odd(number){
    for (var i=0; i<=number; i++){
        if (i%2==0){
            console.log(i,'EVEN')
        }
        else{
            console.log(i,'ODD')
        }
    }
}
var a=read.questionInt('Enter a number : ')
enven_odd(a)
