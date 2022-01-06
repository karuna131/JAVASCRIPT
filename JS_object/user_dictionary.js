var write = require('readline-sync');
var dic={};
var limit=10;
var i=0;
while (i<limit){
    var name =write.question("Enter your name : ");
    var marks=write.questionInt("Enter marks : ");
    dic[name]=marks;
    i++
}
console.log(dic);
