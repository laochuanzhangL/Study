let message={body:1223}
const firstName = message?.body?.user?.firstName || 'default';
console.log(firstName)
function en(){
    console.log(123)
}
let obj={
    en
}
obj.en?.()