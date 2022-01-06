let fs=require('fs')
// const path ='./file.json'
var send_data = {name:'karuna',lastname:'jaiswal'};
var changedata = JSON.stringify(send_data);
fs.writeFileSync('file.json',changedata)
// console.log(changedata)