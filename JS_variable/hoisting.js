var a;               //undefined
console.log(a);
a=10;



var a;         
a=10;
console.log(10);      //10


var a=10;
console.log(a);
var a=20;                 //it will not go to 20




var a = undefined;
console.log(a)
a=10;




var a;
function b(){
    a=10;
    a=20;
    console.log(a);           //20
}
b()