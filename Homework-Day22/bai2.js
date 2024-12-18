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

const data = []
function register (userInfo,data) {
    const user = createUser(userInfo.name, userInfo.password, userInfo.email);
    data.push(user);
    return data;
}
function handleLogin(email, password ){ 
    for(let i =0; i<data.length;i++){
        if(data[i].email === email && data[i].password === password){
            const dataLogin = Object.assign({}, data[i]);
            console.log(dataLogin)
            return
        }
    }
    console.log("Thông tin không hợp lệ!");
}
register({ name: "Minh", password: "123456", email: "Minh1234@email.com" },data);
register({ name: "Minhs", password: "1234567", email: "Minh123@email11.com" },data);
console.log(data)
handleLogin("Minh1234@email.com","123456");

