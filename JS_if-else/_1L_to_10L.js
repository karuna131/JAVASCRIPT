const write=require('readline-sync')
let water_limit=write.question('Enter liter : ')
if (water_limit<1){
    console.log('need')
}else if (water_limit>=1 && water_limit<=10){
    console.log('No need to fill water')
}else{
    console.log('overflow')
}