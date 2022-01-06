const fs = require('fs');

// for creating a folder
// fs.mkdirSync('kavi');


// for creating a new file
// fs.writeFileSync('kavi/data.txt','Hello! my name is karuna and I am from MP')


// now i want to add some more data in that ya overwrite.
// fs.writeFileSync('kavi/data.txt','Hello! my name is Karuna Jaiswal and I am from MP ')



//for adding some data
// fs.appendFileSync('kavi/data.txt','and Now I am doing study in Navgurukul')


// i want to read this file without buffer
// const data=fs.readFileSync('kavi/data.txt','utf8');
// console.log(data)


//rename
// fs.renameSync('kavi/data.txt','kavi/StringData.txt');



//Delete (how to delete file in node js using fs)
// fs.unlinkSync('kavi/StringData.txt');



//now how to delete folder
// fs.rmdirSync('kavi')