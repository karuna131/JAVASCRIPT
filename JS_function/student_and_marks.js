function student(marks_list){
    var count=0
    for (var i of marks_list){
        if (greater(i)==true){
            count+=1
        }
    }
    console.log(count)
}
var marks=student([26,20,19,40,50,60,30])

function greater(number){
    if (20<number){
        return true
    }
}