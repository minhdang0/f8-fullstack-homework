const printHighlight = (content, keyword) => {

    if (typeof content !== 'string' || content.trim() === '' || typeof keyword !== 'string' || keyword.trim() === '') {
        console.log("Invalid input");
    } else {
        const lowerContent = content.toLowerCase();
        const lowerKeyword = keyword.toLowerCase();

        const result = [...content].reduce((acc, cur, index) => {
            if(index < acc.lastIndex ) return acc;

            if (lowerContent.substring(index, index + keyword.length) === lowerKeyword) {
                acc.output += `<b>${content.substring(index, index + keyword.length)}</b>`;
                acc.lastIndex = index + keyword.length ;  
            } else {
                acc.output += content[index];
            }
            return acc;
            
        }, { output: "", lastIndex:0 });

        console.log(result.output);
    }
    
}

let jsContent = `Năm 1995: JavaScript được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm việc tại Netscape. Tên ban đầu của Javascript là Mocha, sau đó được đổi tên thành LiveScript.
Năm 1996:Javascript được gửi đến ECMA(European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu)để chuẩn hóa và đổi tên thành JavaScript.
Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy javaScript ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho JavaScript.
Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
Năm 2016 - nay:Các phiên bản ECMAScript mới được ra mắt liên tục,với nhiều cải tiến và tính năng mới.Cho đến nay javaScript đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.`;

printHighlight(jsContent, "javascript");

const fixContent = (content) => {
    if (content.trim() ==="" || typeof content !== "string") {
        return "Valid input";
    }
    const punctuation = [".", ",", ";", ":", "!", "?"];
    const specialCharOpen = ["(", "[", "{" ,"<"];
    const specialCharClose = [")","]","}",">"]

    const result = [...content].reduce((acc, cur, index) => {

        let nextChar = content[index + 1];
        let preChar = content[index-1];
        if(punctuation.includes(cur)){
            if(nextChar !== " " && nextChar !== ""){
                acc += cur + " ";
            } else {
                acc += cur;
            }
        } 
        else if (specialCharOpen.includes(cur)) {
            if(index > 0 && preChar !== " ") {
                acc += " ";
            } 
            acc += cur;
            
        } 
        else if (specialCharClose.includes(cur)) {
            acc +=cur;

            if(nextChar !== " " && nextChar !== "") {
                acc += " ";
            }
        }else {
            acc += cur;
        }

        return acc;
    }, '')

    return result;
}

let sampleText = "Toi khong biet(ban la ai)<b>toi thic ban<b/> that khong, minh khong biet.";

console.log(fixContent(sampleText));