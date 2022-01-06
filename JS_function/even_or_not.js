function numbers(num1,num2){
if (num1%2==0 && num2%2==0){
    console.log('Both are even')
} 
else{
    console.log('Both are not even')
}
}
numbers(11,22)







function numbers(num1,num2){
    for (var i=0; i<num1.length; i++){
    if (num1[i]%2==0 && num2[i]%2==0){
        console.log('Both are even')
        console.log('--------------------')
    } 
    else{
        console.log('Both are not even')
        console.log('-------------------')
    }
    }
}
    numbers([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])