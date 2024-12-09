function evalBMI ()  {
        const height = parseFloat(prompt("Nhập chiều cao (m)"));
        const weight = parseFloat(prompt("Nhập cân nặng (kg)"));
        
        if (weight <0 || height < 0 ) {
            console.log("Không nhập cân nặng hoặc chiều cao âm")
            return 0;
        }
        else if (weight === 0 || height === 0 ) {
            console.log("Cân nặng hoăc chiều cao của bạn không thể bằng 0");
            return 0;
        }
        else if (isNaN(weight) || isNaN(height)) {
            console.log("Nhập sai dữ liệu");
            return 0;
        }else {
            let bmi = weight / (height**2);
            if (bmi < 18.5) {
                console.log("Bạn thiếu cân");
            }
            else if (bmi >= 18.5 && bmi < 23 ){
                console.log("Bạn bình thường");
            }
            else if (bmi >= 23 && bmi < 25) {
                console.log("Bạn thừa cân");
            }
            else {
                console.log("Bạn bị béo phì");
            }
        }   
    }
evalBMI();