var data = {
    'firstname':'kavi',
    'age':20,
    'Education':'Graduated',
    'place':'MP'
}
//modify value 
// data.firstname = 'Karuna Jaiswal';


//add new key value pair 
// data.hobbies ='singing song';


//delete key value pairs
// delete data.hobbies;
// console.log(data)


for (var i in data){
    console.log(data[i])
}