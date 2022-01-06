//count how many odd numbers are there and how many even numbers.

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even_count=0
var odd_count=0
for (i of elements){
    if (i%2==0){
        even_count+=1
    }
    else{
        odd_count+=1
    }
}
console.log(even_count,"even numbers")
console.log(odd_count,"odd numbers")





// Sum of even and odd numbers
var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even_sum=0
var odd_sum=0
for (i of elements){
    if (i%2==0){
        even_sum+=i
    }
    else{
        odd_sum+=i
    }
}
console.log(even_sum,"Sum of even numbers")
console.log(odd_sum,"Sum of odd numbers")




// average of sum of odd and even numbers.

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even_sum=0
var odd_sum=0
var even_count=0
var odd_count=0
for (i of elements){
    if (i%2==0){
        even_sum+=i
        even_count+=1
    }
    else{
        odd_sum+=i
        odd_count+=1
    }
}
console.log(even_sum/even_count,"average of even numbers")
console.log(odd_sum/odd_count,"average of odd numbers")