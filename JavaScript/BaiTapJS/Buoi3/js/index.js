/*
Nhập 3 môn và điểm chuẩn, loại, khu vực;

Tính đậu rớt

*/

function calcAreaGrade(area) {
     //input area ABCX
 
     switch(area){
         case "A" :
             return 2;
         case "B" :
             return 1;
         case "C" :
             return 0.5;
         default :
             return 0;
     }
 }
 
 
 function calcStudentGrade(type){
 //    input type 1230
 switch(type){
     case "1" :
         return 2.5;
     case "2" :
         return 1.5;
     case "3" :
         return 1;
     default :
         return 0;
 }
 }
 
 function calcTotalGrade(sub1, sub2, sub3, areaGrade, typeGrade){
     var total = sub1 + sub2 + sub3 + areaGrade + typeGrade;
     return total;
 }
 
 function checkResult(totalGrade, standardGrade){
     if(totalGrade >= standardGrade){
         return "Đậu";
     }
     else{
         return "Rớt";
     }
 }
 
 
 function main(){
     var sub1 = document.getElementById("sub1").value;
     var sub2 = document.getElementById("sub2").value;
     var sub3 = document.getElementById("sub3").value;
     var area = document.getElementById("area").value;
     var type = document.getElementById("type").value;
     var standardGrade = document.getElementById("standard").value;
     
     sub1 = parseFloat(sub1); // "1" => 1.00
     sub2 = parseFloat(sub2);
     sub3 = parseFloat(sub3);
     standardGrade = parseFloat(standardGrade);
     if(sub1 === 0 || sub2 === 0 || sub3 === 0){
         console.log("Rớt");
         return;
     }
     var areaGrade = calcAreaGrade(area);
     var typeGrade = calcStudentGrade(type);
     var totalGrade = calcTotalGrade(sub1, sub2, sub3, areaGrade, typeGrade);
 
     var checkResults = checkResult(totalGrade, standardGrade);
     document.getElementById("resultExam").innerHTML = checkResults;
 }






 /*
 Tính tiền điện tiêu thụ
 */

function calcElectricityBill() {
     var kwUsed = document.getElementById("usedElectric").value;
     kwUsed = parseFloat(kwUsed);
     var total = 0;

     if (kwUsed <= 50) 
     {
          total = kwUsed * 500;
     }
     else if (kwUsed <= 100) 
     {
          total = 50 * 500 + (kwUsed - 50) * 650;
     }
     else if (kwUsed <= 200){
          total = 50 * 500 + 50 * 650 + (kwUsed - 100) * 850;
     } 
     else if (kwUsed <= 350) {
          total = 50 * 500 + 50 * 650 + 100 * 850 + (kwUsed - 200) * 1100;
     }
     else {
          total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwUsed - 350) * 1300;
     }
     

     document.getElementById("usedResult").innerHTML = total;
}



/*
input: cho tổng thu nhập năm, số người phụ thuộc
với công thức 
Thu nhập chịu thuế  = Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6tr


output: tính thuế thu nhập cá nhân theo % thuế suất
*/
function calcPersonalTax(){
    var taxIncome = 0;
    var totalTax = 0;
    var yearIncome = +document.getElementById("yearIncome").value;
    var numOfDependentPerson = +document.getElementById("person").value;


    var taxIncome = yearIncome - 4 - numOfDependentPerson * 1.6;
    
    if(taxIncome <= 60){
        totalTax = taxIncome * 0.05;
    }
    else if(taxIncome <= 120){
        totalTax = taxIncome * 0.1;
    }
    else if(taxIncome <=210){
        totalTax = taxIncome * 0.15;
    }
    else if(taxIncome <= 384){
        totalTax = taxIncome * 0.2;
    }
    else if(taxIncome <= 624){
        totalTax = taxIncome * 0.25;
    }
    else if(taxIncome <= 960){
        totalTax = taxIncome * 0.3;
    }
    else if(taxIncome > 960){
        totalTax = taxIncome * 0.35;ß
    }

    document.getElementById("taxIncome").innerHTML = taxIncome;
    document.getElementById("totalTax").innerHTML = totalTax;
}






/*
input : 
*/
function myFunction() {
    document.getElementById("channel").innerHTML = "Bạn cần thuê bao nhiêu cổng kết nối";
    document.getElementById("forCorp").style.display = "block";
    }
function personal() {
    document.getElementById("channel").innerHTML = "";
    document.getElementById("forCorp").style.display = "none";
    }
function calcBill(){
    var personal = document.getElementById("personal").checked;
    var corp = document.getElementById("corp").checked;
    var typeBill;
    var feeBill;
    var feeService;
    var feeRent;
    var connector;
    var channelPremium;
    
    channelPremium = +document.getElementById("channelPremium").value;
    connector = +document.getElementById("forCorp").value;
    
    total = parseFloat(total);

    if(personal){
        typeBill = 1;
    }
    else if (corp){
        typeBill = 2;
    }

    if (typeBill === 1){
        feeBill = 4.5;
        feeService = 20.5;
        feeRent = 7.5;
    }

    else if (typeBill === 2){
        feeBill = 15;
        if (connector <= 10){
            feeService = 75;
        }
        else if(connector > 10){
            feeService = (connector - 10) *5;
        }
        feeRent = 50;
    }

    
    var total = feeBill + feeService + feeRent;
    document.getElementById("totalPay").innerHTML = total;
}