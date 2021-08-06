// //false
// console.log(1 == 2);
//
// //false
// console.log(1 != 1);
//
// //true
// console.log(2 > 1);

// //false
// console.log("a" > "b");
//
// //true
// console.log( 1 >= 1);
//
// //true
// console.log(1< 2);
//
// //true
// console.log( 1<=2);
//
//
// //so sánh kiểu dữ liệu false
// console.log("1" === 1);
//
// //như trên true
// console.log("1" !== 1);
//
// //phủ định
// var a = true;
// console.log(!a);
//
// //có đù 2 điều kiện
// var b = 5;
// console.log(b >=5 && b<100);
//
// // 1 trong 2 điều kiện
// var c = 10;
// console.log(c >= 5 || c <= 100);
//
// //IF
// var d = -10;
//
// if ( d < 0){
//     //chuyển âm thành dương
//     console.log(d = -d);
// }
//
// //Another if
// var average = 5;
// if (average >= 5 && average <= 10){
//     console.log("You passed the exam !");
// }
// else{
//     console.log("You failed");
// }
//
// //BÀI TẬP
// /*  đàu vào : số giờ làm, tiền theo giờ
// *  nếu số giờ > 40 thì tính OT theo hệ x1.5
//  */
//
// var workHours = 40;
// var salaryPerHour = 20;
// var overTime = workHours - 40;
// var salary;
//
// // if (workHours > 40){
// //     salary = overTime * 1.5 * +( salaryPerHour * workHours);
// // }
// // else{
// //     salary = salaryPerHour * workHours;
// // }
//
// /*? cách viết if else mới */
// salary = workHours <= 40
//     ? workHours * salaryPerHour
//     : 40 * salaryPerHour + overTime * salaryPerHour * 1.5;
//
// console.log(salary);
//
//
//
// /*
// * tên, số lượng, đơn giá, tổng tiền
// * nếu số lượng 50 -> 100
// * discount tổng 8%
// * nếu số lượng > 100
// * discount tổng 12%
//  */
//
// var productName ="iphone 12 promax";
// var price = 1300;
// var quantity = 120;
// var total;
//
// //chỉ quét code 1 lần thì sử dụng else if
// if (quantity >= 50 && quantity <= 100){
//     total = price * quantity* 0.92;
// }
//
// else if (quantity < 50){
//     total = price * quantity;
// }
// else {
//     total = price * quantity * 0.88;
// }
// console.log(total);
//
//
//
// var fullName = "Trần Đức Tân";
// var mathMark = 5;
// var physicsMark = 2;
// var chemistryMark = 10;
//
// var averageMark = (mathMark + physicsMark + chemistryMark)/3;
//
// if (averageMark >= 8.5){
//     console.log("Giỏi");
// } else if (averageMark >= 6.5 ){
//     console.log("Khá");
// } else if ( averageMark >= 5){
//     console.log("Trung bình");
// } else{
//     console.log("Yếu");
// }
//
//
// //truthy: còn lại,
// // falsy : 0, "", null, undefined, false, NaN ( not a number)
// var a = 0;
// var b = 2;
//
// //Nếu a đúng, đồng nghĩa a khác 0;
// if (a){
//     console.log( b / a);
// } else{
//     console.log("err");
// }
//
// var res1 = true && false;
// var res2 = true || false;
// var res3 = 1 && 2;
// var res4 = 1 && "";
// var res5 = 0 && 1;
// var res6 = 0 || 1;
//
//
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6);
//
//
// //switch case
// // var n = 5;
// // switch (n){
// //     case 1:
// //         console.log("số một");
// //         break;
// //     case 2:
// //         console.log("số hai");
// //         break;
// //     case 3:
// //         console.log("số ba");
// //         break;
// //     case 4:
// //         console.log("số bốn");
// //         break;
// //     default :
// //         console.log("err không đọc được");
// //         break;
// // }

// var so1 = 10;
// var so2 = 10;
// var so3 = 1;
// var oddNum = 0;
// var evenNum = 0;
//
// if (so1 % 2 === 0){
//     evenNum++ ;
// } else{
//     oddNum++;
// }
//
// if(so2 % 2 === 0){
//     evenNum++;
// }else {
//     oddNum++;
// }
//
// if(so3 % 2 === 0){
//     evenNum++;
// }else {
//     oddNum++;
// }
//
// console.log("Có tổng cộng %d số lẻ :", oddNum);
// console.log("Có tổng cộng %d số chẳn: ", evenNum);


var a = 3;
var b = 3;
var c = 5;

if (( a === b) && (b === c)){
    console.log("Tam giác đều");
} else if (a === b || b === c || a === c){
    console.log("tam giác cân");
} else if (
    a ** 2 === b ** 2 + c ** 2 ||
    b ** 2 === a ** 2 + c ** 2 ||
    c ** 2 === a ** 2 + b ** 2
){
    console.log("tam giác vuông");
}
else{
    console.log('thường')
}












