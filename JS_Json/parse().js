let fs=require('fs')
d=fs.readFileSync('file.json','utf8')
var changedata = JSON.parse(d);
console.log(changedata)