function printMt(number){
    for(let i= 1 ;i<=number;i++){
        for(let j =1 ; j<=number; j++){
            let result = i * j;
            console.log(i + "*" + j + "=" ,result)
        }
    }
}
printMt(10)