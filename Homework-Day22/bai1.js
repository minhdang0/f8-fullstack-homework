
function createUser(name, password, email){
    if(name === ""){
        console.log("Thiếu tên người dùng");
        return;
    }
    if(password ===""){
        console.log("Thiếu mật khẩu người dùng");
        return;
    }
    if(email ===""){
        console.log("Thiếu email người dùng");
        return;
    }
    return {name, password, email , role:"user"};
}

const users = []
function register (userInfo,users) {
    const user = createUser(userInfo.name, userInfo.password, userInfo.email);
    if(user){
        users.push(user);
    }else {
        console.log("Dang ky khon thanh cong")
    } 
    return users;
}
console.log("Đăng ký lần 1")
register({ name: "Minh", password: "123456", email: "Minh1234@email.com" },users);
for(let i = 0; i<users.length;i++){
    console.log(users[i]);
}
console.log("Đăng ký lần 2")
register({ name: "Minhs", password: "1234567", email: "Minh123@email11.com" },users);
for(let i = 0; i<users.length;i++){
    console.log(users[i]);
}