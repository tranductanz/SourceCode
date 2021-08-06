function getContentOfSpan(){
     var spanContent = document.getElementById("spanTag").innerHTML;
     alert(spanContent);
}
//! CHỈ CÓ FORM MỚI CẦN .VALUE
function changeContentOfSpan(){
     document.getElementById("spanTag").innerHTML = "Tân Tân";
}

function changeStyleOfSpan(){
     //! muốn đổi cái gì chấm thuộc tính của nó
     document.getElementById("spanTag").style.color = "green";
     document.getElementById("spanTag").style.backgroundColor = "yellow";
     document.getElementById("spanTag").style.fontSize = "40px";
}

/* 
     b1 nhấn nút đăng nhập
     1. Lấy giá trị từ ô tk và ô mk
     2. Tạo 1 dòng thông báo welcome phía dưới nút đăng nhập ban đầu ẩn đi, nhấn nút thì hiện ra lại, chỉnh thông báo có màu xanh và nền vàng
*/
function getInfomation(){
     var username = document.getElementById("txtUsername").value;
     var password = document.getElementById("txtPassword").value;

     document.getElementById("welcome").style.display = "block";
     document.getElementById("welcome").style.backgroundColor = "green";
     document.getElementById("welcome").style.color = "yellow";
 
     document.getElementById("username").style.display = "block";
     document.getElementById("username").innerHTML = username;

     document.getElementById("password").style.display = "block";
     document.getElementById("password").innerHTML = password;

}

function calcPayForMeal(){
     //! Cách đổi 1) + trước document 
     //!          2) Parse
     //!          3) bản thân * 1;
     var total = document.getElementById("totalCost").value;
     total = parseFloat(total);
     var tipSelect = document.getElementById("tipSelection").value;
     tipSelect = parseFloat(tipSelect);

     var person = document.getElementById("people").value;
     person = parseInt(person);

     var haveToPay = (total * tipSelect)/person;

     document.getElementById("tipResult").innerHTML = haveToPay;

}