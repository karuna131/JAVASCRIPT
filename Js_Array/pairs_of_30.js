//in while loop
var num=30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
var li=[]
var i=0
while (i<n.length){
    var j=0
    li2=[]
    while (n[i]>n[j]){
        if (num==n[i]+n[j]){
            li2.push(n[j],n[i])
            li.push(li2)
        }
        j++
    }
    i++
}
console.log(li)





//In for of loop
var num=30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
li=[]
for (i of n){
    for (j of n){
        if (num==i+j){
            li.push([i,j])
        }
    }
}
console.log(li)