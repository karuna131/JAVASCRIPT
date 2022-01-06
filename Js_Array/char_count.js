var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"];
var li=[];
for (i of char_list){
        if (!li.includes(i)){
            li.push(i)
        }
}
//console.log(li)
for(j of li){
    var count=0;
    for(k of char_list){
        if (j === k){
            count+=1
        }
    }
console.log(j,"=",count);
}