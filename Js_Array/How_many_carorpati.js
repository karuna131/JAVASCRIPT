var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var crorepati=0;
var lakhpati=0;
var dilwale=0;
for( var  i of kitna_paisa_hai){
    if(i>= 10000000){
        crorepati+=1
    }
    else if(i>=100000){
        lakhpati+=1
    }
    else{
        dilwale+=1
    }
}
console.log(crorepati,'crorepati')
console.log(lakhpati,'lakhpati')
console.log(dilwale,'dilwale')