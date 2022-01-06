let n=require("readline-sync");
let choose_ascii=n.question("enter character : ");
var ascii_number=choose_ascii.charCodeAt(0)                 //charCodeAt() method returns the Unicode of the character at the specified index in a string.
console.log(ascii_number)

 


// let n=require("readline-sync");
// let choose_char=n.question("enter character : ");
// var ascii_number=choose_char.charCodeAt(choose_char.length-1)           ///Return the Unicode of the last character in a string (the Unicode value for "l")
// console.log(ascii_number)
