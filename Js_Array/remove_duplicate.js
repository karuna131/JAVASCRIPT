var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
li=[]
for (i of n){
    if (!li.includes(i)){
        li.push(i)
    } 
}
console.log(li)