var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 };
var li=[];
for (var i=0; i<3; i++){
    var max=0;
    for (var j in my_dict){
        // console.log(my_dict[j])
        if (max<my_dict[j]){
            max=my_dict[j]
        }
    // my_dict.pop(c)
    }
    li.push(max)
}
console.log(li)                               // incomplete