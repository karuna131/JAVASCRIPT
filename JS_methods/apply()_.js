const parson1 = {
    name: 'Kavi', 
    lastname: 'Jai', 
    quallities: function(hobby1,hobby2){
        console.log(`Hey my name is ${this.name} ${this.lastname}, and my hobbies are ${hobby1} & ${hobby2}.`)
    }
}
//parson1.quallities()

const parson2 ={ 
    name: 'Aakash',
    lastname: 'Jaiswal',
}
parson1.quallities.call(parson2,['kho-kho','volleyball']);