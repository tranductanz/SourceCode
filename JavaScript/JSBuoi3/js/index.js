// function scope
// function calcSum(){
//      // biến sum được gọi là biến cục bộ
//      var sum = 1 + 2;
//      console.log(sum);
//      showMessage();
// }

//function showMessage(){
//      console.log("Hello World");
// }
// showMessage();
// calcSum();

//?function có tham số đầu vào

// function calcSum(a, b){
//      // biến sum được gọi là biến cục bộ
//      var sum = a + b;
//      console.log(sum);
// }
//
// calcSum(1, 3);
// calcSum(7, 9);
// calcSum();

// //?function có/ không giá trị trả về
//
// function calcSum(a, b){
//      var sum = a + b;
//      return sum;
// }
//
// var sum1 = calcSum(3,6 );
// console.log(sum1);
// var sum2 = calcSum(5, 5);
// console.log(sum2);


// function calcElectricityBill(kW) {
//     // var totalAmount;
//     if (kW < 50) {
//         return kW * 500;
//     }
//     if (kW <= 100) {
//         return kW * 650;
//     }
//     if (kW <= 200) {
//         return 850;
//     }
//     if (kW <= 350) {
//         return kW * 1100;
//     } else {
//         return kW * 1300;
//     }
//
//
// }

// var total = calcElectricityBill(500);
// console.log("Tổng tiền điện là : ", total);

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


//! DOM là phương thức từ JS lấy HTML ra
function main(){
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var sub3 = document.getElementById("sub3").value;
    var area = document.getElementById("area").value;
    var type = document.getElementById("type").value;
    var standardGrade = document.getElementById("standard").value;
    //! chuyển điểm sang số, vì hiện tại đang là + string;
    sub1 = parseFloat(sub1); // "1" => 1.00
    sub2 = parseFloat(sub2);
    sub3 = parseFloat(sub3);
    standardGrade = parseFloat(standardGrade);
    //todo còn cách khác
    sub1 = sub1 *1;
    sub2 = sub2 *1;
    sub3 = sub3 *1;

    //! Chỉ cần sub1,2,3 = 0 thì sẽ return luôn, cắt flow
    if(sub1 === 0 || sub2 === 0 || sub3 === 0){
        console.log("Rớt");
        return;
    }
    var areaGrade = calcAreaGrade(area);
    var typeGrade = calcStudentGrade(type);
    var totalGrade = calcTotalGrade(sub1, sub2, sub3, areaGrade, typeGrade);

    var checkResults = checkResult(totalGrade, standardGrade);
    console.log(checkResults);
}





