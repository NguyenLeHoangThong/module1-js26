// Variable - Biến (Một bộ nhớ có tên)
// set: đặt giá trị cho 1 biến
// get: lấy giá trị của biến ra để sử dụng

// let: dạng biến thay đổi được giá trị
// const: dạng biến KHÔNG thay đổi được giá trị



// data type

// string: chuỗi kí tự -> có vô hạn giá trị
let fullName = "Xin chào tôi là Thông";
const pi = 3.14;

let age;
age = 15;

// console.log(age)

// number: có vô hạn giá trị
let priceOfCar = 100;
let priceOfPizza = 50;

// boolean => chỉ có 2 giá trị duy nhất: true | false
// let isMale = true;
// let isTall = false;

let test = 3 < 2;

let isMaleAndTall = 5 > 3;

// 2 vế đều là dạng boolean => Kết quả cuối cùng nhận lại được cũng là boolean
// cả 2 vế đều TRUE => Kết quả cuối cùng => TRUE
// 1 vế là TRUE, 1 về là FALSE => Kết quả cuối cùng => False (!!!!!!!!!!!!!!!!!!!!!!!!!)
// cả 2 vế đều FALSE => KQ: False

isMaleAndTall = true
// 2 vế đều là dạng boolean => Kết quả cuối cùng nhận lại được cũng là boolean
// cả 2 vế đều TRUE => Kết quả cuối cùng => TRUE
// 1 vế là TRUE, 1 về là FALSE => Kết quả cuối cùng => TRUE (!!!!!!!!!!!!!!!!!!!!!!!!!)
// cả 2 vế đều FALSE => KQ: False

// Nếu một bạn học sinh lớn hơn hoặc bằng 18 tuổi => In ra console: "Bạn được thi đại học".
// Ngược lại => In ra console: "Bạn chưa được thi."

// const age = 16;
const isLearntEnoughLessonsOfGrade12 = false;

// if (age >= 18 && isLearntEnoughLessonsOfGrade12) {
//     console.log("Bạn được thi đại học");
// }
// else if (age >= 18 && !isLearntEnoughLessonsOfGrade12) {
//     console.log("Bạn sẽ thi đại học nếu học thêm hết kiến thức lớp 12!");
// }
// else if (age < 18 && isLearntEnoughLessonsOfGrade12) {
//     console.log("Bạn học vượt lớp, quá xuất sắc!");
// }
// else {
//     console.log("Bạn chưa được thi.");
// }






// if (c > 10) {
//     console.log("C > 10")
// }
// else if (c <= 10 && c > 5) {
//     console.log("C > 5 va C <= 10")
// }
// else {
//     console.log("C <= 5")
// }

// const c = 50;

// switch (c) {
//     case 50: {
//         console.log("C la 50");
//         break;
//     }
//     case 40: {
//         console.log("C la 40")
//         break;
//     }
// }






// biến "nhảy"; điều kiện để vòng lặp còn nhảy; số bước "nhảy"
for (let i = 0; i > 5; i++) {
    console.log("Xin chao cac ban!")
}

let i = 0;

// // Bai tap 1) Cho 1 số A => Kiểm tra số đó có phải là số chẵn hay không.
// const a = 12;

// if (a % 2 === 0) {
//     console.log("a là số chẵn");
// }
// else {
//     console.log("a là số lẻ.")
// }

// Bai tap 2) Cho 1 số B => In ra console tất cả những số chẵn từ 0 -> B.
// Bai tap 3) Cho 1 số B => In ra console số đầu tiên mà b chia hết, từ 3 -> b

const b = 50;

// while (i < b) {
//     i++; // 5
    
//     if (b % i === 0) {
//         console.log(i);
//         continue;
//     }

//     console.log("Xin chao")

// }





