var dict={'name':'Raju', 'marks':56}
const write=require('readline-sync')
let user=write.question('Enter key name and check it is exist in dictionary or not  : ')
if (dict.hasOwnProperty(user)){
    console.log('exist')
}else{
    console.log('not exist')
}