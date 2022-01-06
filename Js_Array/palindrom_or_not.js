var _name=['m','a','l','a','y','a','l','a','m']
var i=0
var j=1
var str1=''
var str=''
while (i<_name.length){
    str1=str1+_name[i]
    k=_name.length-j
    if (_name[k]==_name[i]){
        str=str+_name[k]
    }
    j++
    i++
}
if (str===str1){
    console.log("This is palindrom")
}
else{
    console.log("This is not palindrom")
}