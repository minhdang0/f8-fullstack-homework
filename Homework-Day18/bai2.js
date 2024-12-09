function calElectric(kwh){
    let price;
    if (kwh > 0 && kwh <= 50 ) {
        price = 1.678;
    }
    else if (kwh >=51 && kwh <=100) {
        price = 1.734;
    }
    else if (kwh >=101 && kwh <=200) {
        price = 2.014;
    }
    else if (kwh >=201 && kwh <=300) {
        price = 2.536;
    }
    else if (kwh >=301 && kwh <=400) {
        price = 2.834;
    }
    else {
        price = 2.927
    }
    return price *kwh;
}

const kwh = parseInt(prompt("Nhập số kwh sử dụng"));

if (kwh < 0 && isNaN(kwh)) {
    console.log("Nhập sai dữ liệu");
}
else {
    let priceElec = calElectric(kwh);
    console.log(`Tiền điện của bạn là ${priceElec}`);
}