function multiplesOfNumbers(limit){
    sum=0
    for (var i=1; i<=limit; i++){
        if (i%3==0 || i%5==0){
            console.log(i)
            sum=sum+i
        }
    }
    console.log('sum of all numbers : ',sum)
}
multiplesOfNumbers(10);