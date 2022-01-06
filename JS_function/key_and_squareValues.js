function squares_of_numbers(limit){
    var dic={}
    for (var i=1; i<=limit; i++){
        dic[i]=i**2
    }
    console.log(dic)
}
squares_of_numbers(20);