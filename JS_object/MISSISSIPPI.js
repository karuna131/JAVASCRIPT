var word="MISSISSIPPI";
var list1=[];
var dic={};
for (var i of word){
    if (!list1.includes(i)){
        list1.push(i)
    }
}
var list2=[];
for (var k in list1){
    var count=0
    for (var j of word){
        if (list1[k]===j){
            count+=1
        }
    list2.push(count)
    dic[list1[k]]=count
}
}
console.log(dic);