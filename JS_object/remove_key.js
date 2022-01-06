// First way to solve this
var myDict= { 1: 'NAVGURUKUL',  2: 'IN',  3:{'A' : 'WELCOME', 'B' : 'To', 'C' : 'DHARAMSALA' } }
delete myDict[3]['A'];
console.log(myDict)




// Second way to solve this
var myDict= { 1: 'NAVGURUKUL',  2: 'IN',  3:{'A' : 'WELCOME', 'B' : 'To', 'C' : 'DHARAMSALA' } }
for (i in myDict){
    delete myDict[i]['A']
}
console.log(myDict)