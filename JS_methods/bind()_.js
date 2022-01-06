// 1
const selecation1 = {
    F:'kirthiv',
    L:'shubh',
    quallity: function(){
        console.log(`hello ${this.F} ${this.L} you are selected for Navgurukul Program cource`);
    }
}
const selecation2 = {
    F:'sunil',
    L:'Jaiswal'
}
// let select = selecation1.quallity.bind(selecation1);
let select = selecation1.quallity.bind(selecation2);
select()





// 2
const selecation1 = {
    F:'shinchen',
    L:'Jaiswal'
}
const selecation2 = {
    F:'sonu',
    L:'Jaiswal'
}
const selecation3 = {
    F:'sunil',
    L:'Jaiswal'
}
function quallity(){
    console.log(`hello ${this.F} ${this.L} you are selected for Navgurukul Program cource`);
}

let select = quallity.bind(selecation1);
select()
