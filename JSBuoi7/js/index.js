// // primitive (tham trị) : string, number, boolean, undefined, null
// //reference (tham chiếu) : array, object

// //tạo mảng

// var studentNames = ["Hieu",
//                     "Tan",
//                     "Tai",
//                     "Tu"];

// // //lấy giá trị từ mảng
// // console.log(studentNames[2], studentNames[3]);

// // //thao tác với mảng


// // //thêm một phần tử vào cuối mảng
// // studentNames.push("Tiền");

// // //thêm một phần từ vào đầu mảng
// // studentNames.unshift("Tân");


// // // xoá 1 phần tử nằm cuối mảng
// // studentNames.pop();

// // // xoá 1 phần từ đầu tiên trong mảng
// // studentNames.shift();

// //xoá 1 phần tử bất kỳ trong mảng
// //todo đi từ vị trí 1, xoá 2
// studentNames.splice(1, 2);


// //hàm nối 2 mảng lại với nhau
// var studentAge_1 = [
//                     23,
//                     21,
//                     22,
//                     24,
//                     25,
//                     26];

// var studentAge_2 = [
//                     33,
//                     31,
//                     32,
//                     34,
//                     35,
//                     36];                    

// var studentAges = studentAge_1.concat(studentAge_2);


// //kiểm tra độ dài mảng
// console.log(studentAge_1.length);
// console.log(studentNames);
// console.log(studentAges);


var numArr = [];

function addNum(){
     var number = +document.getElementById("txtNum").value;
     numArr.push(number);
     console.log(numArr);
}

function sumOfEvent(){
     var sum = 0;

     for (var i = 0; i < numArr.length; i++){
          if(numArr[i] % 2 === 0){
               sum += numArr[i];
          }
     }

     console.log(sum);
}

function countNegativeNum(){
     var negativeNum = 0;
     
     for (var i =0; i< numArr.length; i++){
          if (numArr[i] < 0){
               negativeNum++;
          }
     }
     console.log(negativeNum);
}

function sumNegativeNum(){
     var sumNegativeNum = 0;

     for (var i = 0; i< numArr.length; i++){
          if (numArr[i] < 0){
               sumNegativeNum += numArr[i];
          }
     }
     console.log(sumNegativeNum);
}



//! Bài 2

var gradeList = [];

function addGrades() {
     var txtGrades = document.getElementById("txtGrades").value;
     var temp = txtGrades.split(",");

     for (var i = 0; i < temp.length; i++){
          gradeList.push(+temp[i]);
     }
     console.log(gradeList);
}

function calcAverage(){
     var averageNum = 0;
     var sumNum = 0;

     for (var i = 0; i < gradeList.length; i++){
          sumNum += gradeList[i];
     }
     averageNum = sumNum / gradeList.length;
     console.log(averageNum);
}

//! câu phỏng vấn
function highestNum(){
     var highestNum = gradeList[0];
     var second = 0;

     for (var i = 1; i < gradeList.length; i++){
          if (gradeList[i] > highestNum){
//todo cho số nhì = số lớn, số lớn = số mới;
               second = highestNum;
               highestNum = gradeList[i];
          }
          else if (gradeList[i] > second && gradeList[i] !== highestNum){
               second = gradeList[i];
          }
     }
     console.log(highestNum);
     console.log(second);
}

function lowestNum(){
     var lowestNum = gradeList[0];

     for (var i = 1; i < gradeList.length; i++){
          if (gradeList[i] < lowestNum){
               lowestNum = gradeList[i];
          }
     }
     console.log(lowestNum);
}

function countGreatStudent(){
     var countGreat = 0;

     for (var i = 0; i < gradeList.length; i++){
          if (gradeList[i] > 8){
               countGreat++;
          }
     }
     console.log(countGreat, "Học sinh giỏi");
}


//! cách này bị Big O notation : thuật toán phức tạp
function checkRandomSum(){
     for (var i = 0; i < gradeList.length; i++){
          for (var j = i + 1; j < gradeList.length; j++){
               if (gradeList[i] + gradeList[j] === 10){
                    console.log("Có");
                    return;
               }
          }
     }
     console.log("Không");
}

//! cách này sẽ đơn giản hơn : multiple point
function checkSum(){
     //multiple point : đa điểm (chỉ tác dụng với mảng có
     // thứ tự tăng dần)
     // [1,2,3,4,5,6, 7.1, 8.2, 9.7];
     //  x                       y
     // tăng đầu giảm đuôi cho tới khi === 10

     var i = 0;
     //! tìm điểm cuối cùng của array
     var k = gradeList.length - 1;

     while ( i < k){
          var sum = gradeList[i] + gradeList[k];
          if(sum === 10){
               console.log("Có");
               return;
          }
          else if (sum > 10){
               k--;
          }
          else{
               i++;
          }
     }
     console.log("Không");
}


function swapGrade(i, k){
     var temp = gradeList[i];
     gradeList[i] = gradeList[k];
     gradeList[k] = temp;
     // console.log(gradeList);
}

//các loại sort

//? interchange sort
//? selection sort
//todo (dễ bị hỏi nhất) bubble sort
//? insertion sort
//? quick, merge, heap, redix


function sortBubble(){
     for (k = 0; k < gradeList.length; k++){
          for (var i = 0;i < gradeList.length;i++){
               //! Lớn hơn cho đổi chỗ
               if (gradeList[i] > gradeList[i+1]){
                    swapGrade(i, i+1);
               }
          }
     }
     console.log(gradeList);
}

//! Đảo ngược mảng
function reverseGradeList(){
     var reversedList = [];
     for (var i = gradeList.length -1; i >= 0; i--){
          reversedList.push(gradeList[i]);
     }
     console.log(reversedList);
}

function filterGrade(){
     var filterList =[];
     // duyet mang graList, kiem tra > 5; push vao filterLish
     for (var i = 0; i < gradeList.length; i++){
          if (gradeList[i] > 5){
               filterList.push(gradeList[i]);
          }
     }
     console.log(filterList);
}

function findGrade(){
     // duyet mang graList kiem tra = 0 => log ra index

     for (var i = 0; i < gradeList.length; i++){
          if (gradeList[i] === 9){
               console.log(i);
               return;
          }
     }
     console.log("Không có điểm 9");
}


document.getElementById("title").innerHTML;
document.getElementsByTagName("span");
var elements = document.getElementsByClassName("content")

for (var i = 0;i < elements.length; i++){
     elements[i].innerHTML = "cybersoft";
}

document.querySelector("#title");
document.querySelector('.content');
document.querySelectorAll('.content');

console.log(elements);