/*
input: nhập vào 3 số nguyên
outout: viết xuất 3 số theo thứ tự tăng dần
*/

function sortNum(){
     var num01 = document.getElementById("num1").value;
     var num02 = document.getElementById("num2").value;
     var num03 = document.getElementById("num3").value;

     var array = [num01, num02, num03];

     document.getElementById("numSorted").innerHTML = array.sort();
}



/*
Hỏi ai và đưa ra câu chào hợp lý

*/
     function guestWho(){
     var whoUse = document.getElementById("whoUsePC").value;
     var hiDad = "Ba !";
     var hiMom = "Mẹ !";
     var hiBro = "Anh !"
     var hiSis = "Em !"

     switch(whoUse) {
          case "B" :
               document.getElementById("user").innerHTML = hiDad;
               break;
          case "M" :
               document.getElementById("user").innerHTML = hiMom;
               break;
          case "A" :
               document.getElementById("user").innerHTML = hiBro;
               break;
          case "E" :
               document.getElementById("user").innerHTML = hiSis;
               break;
          default :
               document.getElementById("error").innerHTML = "Chưa chọn biết chào ai hả !";
               break;
     }
     
     }




/* 
input : cho 2 số

output: đếm chẵn lẻ
*/

function countNum(){
     var num01 = document.getElementById("num001").value;
     num01 = parseInt(num01);
     var num02 = document.getElementById("num002").value;
     num02 = parseInt(num02);
     var num03 = document.getElementById("num003").value;
     num03 = parseInt(num03);
     var oddNum = 0;
     var evenNum = 0;

     if (num01 % 2 === 0){
          evenNum++;
     }
     else{
          oddNum++;
     }

     if (num02 % 2 == 0){
          evenNum++;
     }
     else{
          oddNum++;
     }

     if (num03 % 2 == 0){
          evenNum++;
     }
     else{
          oddNum++;
     }

     document.getElementById("even").innerHTML = evenNum;
     document.getElementById("odd").innerHTML = oddNum;
}


/*
cho a,b,c
xét a,b,c sao và xem nó là tam giác gì

*/
function calcTriangle(){
     var a = +document.getElementById("canhA").value;
     var b = +document.getElementById("canhB").value;
     var c = +document.getElementById("canhC").value;

     if (( a === b) && (b === c)){
          document.getElementById("result").innerHTML = "tam giác đều";
      } else if (a === b || b === c || a === c){
          document.getElementById("result").innerHTML = "tam giác cân";
      } else if (
          a ** 2 === b ** 2 + c ** 2 ||
          b ** 2 === a ** 2 + c ** 2 ||
          c ** 2 === a ** 2 + b ** 2
      ){
          document.getElementById("result").innerHTML = "tam giác vuông"; 
      }
      else{
          document.getElementById("result").innerHTML = "tam giác thường";
      }


     }
     