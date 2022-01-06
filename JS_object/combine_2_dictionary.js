// combine two dictionary adding values for common keys.
var d1 = {'a': 100, 'b': 200, 'c':300}
var d2 = {'a': 300, 'b': 200, 'd':400}
for (i in d1){
    for (j in d2){
        if (i==j){
            d=d1[i]+d2[j]
            d2[i]=d
        }
        else{
            d2[i]=d1[i]
            d2[j]=d
        }
    }
}
console.log(d2)