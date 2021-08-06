// tính tiền taxi
/* 
    input : loại xe, km, thời gian

    process: 
        1. lấy input 
        2. lấy loại dom đến 3 input radio .checked
        3. tính tiền 
            3.1 kiểm tra loại xe lấy đc => bảng giá switch
            switch(loaixe){
                case "X":
                tính tiền 
                if km = 0.5, cho 3p => tien = 8 + 3 * 2 = 14
                if km = 14 , cho 3p => tien = 8.000 + 13 * 12.000 +  2.000 * 3 ;
                if km = 25 , cho 3p => tien = 8.000 + 19 * 12.000 + 5 * 10.000 + 3 * 2000 
            }

    output: tiền
 */

function checkUberType() {
  var uberX = document.getElementById("uberX").checked;
  var uberSUV = document.getElementById("uberSUV").checked;
  var uberBlack = document.getElementById("uberBlack").checked;
  var uberType;

  if (uberX) {
    uberType = 1;
  } else if (uberSUV) {
    uberType = 2;
  } else if (uberBlack) {
    uberType = 3;
  }

  return uberType;
}

function calcTotal(numberKm, waitingTime, uberType) {
  var total;

  var firstPrice;
  var secondPrice;
  var thirdPrice;
  var waitingPrice;

  if (uberType === 1) {
    firstPrice = 8000;
    secondPrice = 12000;
    thirdPrice = 10000;
    waitingPrice = 2000;
  } else if (uberType === 2) {
    firstPrice = 9000;
    secondPrice = 14000;
    thirdPrice = 12000;
    waitingPrice = 3000;
  } else if (uberType === 3) {
    firstPrice = 10000;
    secondPrice = 16000;
    thirdPrice = 14000;
    waitingPrice = 4000;
  }

  if (numberKm <= 1) {
    total = firstPrice + waitingTime * waitingPrice;
  } else if (numberKm <= 20) {
    total =
      firstPrice + (numberKm - 1) * secondPrice + waitingTime * waitingPrice;
  } else {
    total =
      firstPrice +
      19 * secondPrice +
      (numberKm - 20) * thirdPrice +
      waitingTime * waitingPrice;
  }
  return total;
}

function main() {
  var numberKm = +document.getElementById("numberKm").value;
  var waitingTime = +document.getElementById("time").value;

  var uberType = checkUberType();
  var total;

  total = calcTotal(numberKm, waitingTime, uberType);

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = total + " vnd";
}
