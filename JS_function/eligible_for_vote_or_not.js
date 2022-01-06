function eligible_age(age1,age2){
    if (age1>=18 || age2>=18){
        console.log('eligible for vote')
    }
    if (age1<=18 || age2<=18){
        console.log('Not eligible for vote')
    }
}
eligible_age(18,16)