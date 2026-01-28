const passwordBox=document.getElementById("password");
length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="~!@#$%^&*_-/]}";
const random= uppercase+lowercase+numbers+symbols;
function createPassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(length > password.length){
        password+=random[Math.floor(Math.random()*random.length)];
    }
    passwordBox.value=password;
}
function copypass(){
    passwordBox.select();
    document.execCommand("copy")
}