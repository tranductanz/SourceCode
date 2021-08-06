console.log("Hello world from outside");

var message = "Hello";

var num1 = 1;
var num2 = 3;
// camel case
var fullName = "Trần Đức Tân";

console.log(num1 + num2);
console.log(num2 - num1);
console.log(fullName);

//boolean
var isHandsome = true;
//underfine
var age;
//null
var ageNull = null;

var sum = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var rest = num1 % num2;

console.log("Phép cộng :", sum);
console.log("Phép trừ : ", subtraction);
console.log("Phép nhân :", multiplication);
console.log("Phép chia : ", division);
console.log("Lấy phần dư : ", rest);

/*
* Bài 1 : tính chiều dài cạnh huyền tam giác vuông
*  *Đầu vào : AB, AC
*
*  Giải thuật :
*   - tạo biến : ab, ac, bc
*   - gán giá trị cho ab = 4 và ac =5;
*   bc^2 = ab^2 + ac^2;
* => bc = Math.sqrt(ab**2 + ac**2);
*   Đầu ra : cạnh huyền BC
*  */

var ab = 4;
var ac = 5;
var bc;


bc = Math.sqrt(ab**2 + ac**2);
console.log("Cạnh huyền tam giác vuông là : ", bc);


/*
* Viết chương trình tính lương nhân viên
*  */

var salaryPerDay = 100000;
var workedDay = window.prompt("Enter worked Day : ");
var totalSalary = salaryPerDay * workedDay;

console.log("Tổng lương nhân viên : ", totalSalary);

