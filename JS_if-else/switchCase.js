const w = require('readline-sync');
let day = w.question('Enter day : ');
let meel=w.question('Enter a meel : ');
switch(day){
    case "monday":
        switch(meel){
            case "lunch":
                console.log('dal chabal');
                break;
            case "dinnar":
                console.log('roti sabji');
                break;
        }
        break;
    case "tuesday":
        switch(meel){
            case "lunch":
                console.log('rajma chabal');
                break;
            case "dinner":
                console.log('chhole bhature');
                break;
        }
        break;
}