function calFax (salary) {
    if (salary <= 11*(10**6)) {
        return 0;
    }
    else if (salary <= 25*(10**6)){
        return (salary - 11*(10**6)) * 0.05;
    }
    else if (salary <= 50*(10**6)) {
        return (25-11)*(10**6) *0.05 + (salary -25*(10**6))  *0.1;
    }
    else if (salary <= 80*(10**6)) {
        return (25-11)*(10**6) *0.05 + (50-25)*(10**6) *0.1+ (salary - 50*(10**6))  *0.2;
    }
    else {
        return (25-11)*(10**6) *0.05 + (50-25)*(10**6) *0.1+ (80-50)*(10**6) *0.2+ (salary - 80*(10**6))  *0.3;
    }


}
const salary = parseInt(prompt("Nhập lương của bạn"));


if(isNaN(salary) || salary <0 ){
    console.log("Nhập sai dữ liệu");
}
else {
    let tax = calFax(salary);
    console.log(`Lương của bạn: ${salary}`);
    console.log(`Thuế thu nhập cá nhân: ${tax}`);

}
