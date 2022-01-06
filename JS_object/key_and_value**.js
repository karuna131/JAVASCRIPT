const write=require('readline-sync')
let limit=write.questionInt('Enter a limit : ')
var dic={}
var i=0
while (i<limit){
    let key_name=write.questionInt('Enter key : ')
    var value_=key_name**2
    dic[key_name]=value_
    i++
}
console.log(dic)                            //Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}.
