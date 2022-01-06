var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7, 90,1]
var i=0
while (i<numbers.length){
    var max=0
    while (max <numbers.length){                                                       
        if (numbers[i]<numbers[max]){
            l=numbers[i]
            numbers[max]=l
        }
        max++
    }
    i++
}
console.log(l)
