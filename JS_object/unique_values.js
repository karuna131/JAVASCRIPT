var dict_list=[ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
var uniqueValue_list=[]
for (i of dict_list){
    for (j in i){
        if (!uniqueValue_list.includes(i[j])){
            uniqueValue_list.push(i[j])
        }
    }
}
console.log(uniqueValue_list)