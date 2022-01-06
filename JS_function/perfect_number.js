function perfect(num){
    sum=0;
    for (var i=1; i<num; i++){
        if (num%i==0){
        sum=+i 
    }
    }
    // console.log(sum)  
if (sum==num){
console.log('It is a perfect number');
}
else{
console.log('It is not a perfect number');
}
}
perfect(6)