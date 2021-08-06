/* 1) Tính tiền lương nhân viên
 input lương 1 ngày 100k
 số ngày làm user nhập

output: tính tiền lương = lương 1 ngày * số ngày làm

*/
function calcSalary(){
     var salaryPerDay = 100000;
var workedDay = +document.getElementById("workedDay").value;
var total = salaryPerDay * workedDay;


document.getElementById("totalSalary").innerHTML = total; 
}




/*
input : user nhập 5 số
output : tính trung bình
*/

function calcAverage(){
     var num1 = +document.getElementById("num1").value;
     var num2 = +document.getElementById("num2").value;
     var num3 = +document.getElementById("num3").value;
     var num4 = +document.getElementById("num4").value;
     var num5 = +document.getElementById("num5").value;
     var averageNum = (num1 + num2 + num3 + num4 + num5)/5;
     document.getElementById("average").innerHTML = averageNum;
}


/*
input USD = 23500 Vnđ
output : quy đổi usd -> vnd
*/

function changeCurrency(){
     var usdMoney = +document.getElementById("usd").value;
     var vndMoney = usdMoney * 23500;
     document.getElementById("vnd").value = vndMoney;
}


/* 
input : chiều dài, rộng
output : diện tích = dài * rộng
          chu vi = (dài + rộng )*2
*/

function calcRectangle(){
     var lengTh = +document.getElementById("length").value;
     var widTh = +document.getElementById("width").value;

     var acreage = lengTh * widTh;
     var perimeter = (lengTh + widTh) * 2;

     document.getElementById("acreAge").innerHTML = acreage;
     document.getElementById("periMeter").innerHTML = perimeter;
}


/*
     input : cho 1 số gồm 2 chữ số
     output : tính tổng 2 ký số.
*/
function calcSumEachNumber(){
     var number = +document.getElementById("num").value;

     var num1 = number % 10;
     num1 = parseInt(num1);
     var num2 = number / 10;
     num2 = parseInt(num2);

     var sum = num1 + num2;

     document.getElementById("sumNum").innerHTML = sum;
}
