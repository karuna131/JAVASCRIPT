var jsonobject = {
    'list1':['chhaya','saloni','sanjna','karuna']
}
for (var i in jsonobject.list1){
console.log(jsonobject.list1[i])
}



var data = {
    'FIFA' : [
        {'name':'sanjna','From':'MP'},
        {'name':'chhaya','From':'MP'},
        {'name':'saloni','From':'MP'}
    ]
}
for (var i in data.FIFA){
    for (var j in data.FIFA[i]){
        console.log(data.FIFA[i][j])
    }
}