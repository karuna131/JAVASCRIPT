const write=require('readline-sync');
let user_name=write.question('Enter a name : ')
let name=user_name
var s="";
let i=name.length-1
while (i>=0){
    s=s+name[i]
    i--
}
if (name==s){
    console.log('this is a palindrome ')
}
else{
    console.log('this is not a palindrome')
}