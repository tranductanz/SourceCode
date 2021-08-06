/*
     QUẢN LÝ SINH VIÊN
     1. Cho phép người dùng add sv và lưu
     2. Hiện danh sách toàn bộ sinh viên ra màn hình
     3. Cập nhật thông tin sinh viên
     4. Xoá sinh viên ra khỏi danh sách
     5. Tìm kiếm sinh viên
     6. Validation input

*/

// II. Mockup giao diện


//III. Phân tích lớp đối tượng : Student (id, name, type, math, physics, chemistry, training, calcAverage)



//IV. khởi tạo lớp đối tượng



//V. Bắt tay làm từng chức năng

var studentArr = [];

//! TỔNG HỢP FORM true &= false thì có nghĩa true = true & false
var validateForm = () => {
     var id = document.querySelector('#txtMaSV').value;
     var name = document.querySelector('#txtTenSV').value;
     var type = document.querySelector('#loaiSV').value;
     var math = +document.querySelector('#txtDiemToan').value;
     var physics = +document.querySelector('#txtDiemLy').value;
     var chemistry = +document.querySelector('#txtDiemHoa').value;
     var training = +document.querySelector('#txtDiemRenLuyen').value;

     var isValid = true;
     isValid &= checkRequired(id, "#idError") && checkLength(id,"#idError", 6, 8);
     isValid &= checkRequired(name, "#nameError") && checkText(name, "#nameError");
     isValid &= checkNum(math, "#mathError", 0, 10);
     isValid &= checkNum(physics, "#physicsError", 0, 10);
     isValid &= checkNum(chemistry, "#chemistryError", 0, 10);
     
     return isValid;
};
// function 1 : Thêm sinh viên vào trong danh sách;
var addStudent = () =>{
     if (!validateForm()){
          return;
     }
     var id = document.querySelector('#txtMaSV').value;
     var name = document.querySelector('#txtTenSV').value;
     var type = document.querySelector('#loaiSV').value;
     var math = +document.querySelector('#txtDiemToan').value;
     var physics = +document.querySelector('#txtDiemLy').value;
     var chemistry = +document.querySelector('#txtDiemHoa').value;
     var training = +document.querySelector('#txtDiemRenLuyen').value;


     //todo VALIDATION DỮ LIỆU TỪ INPUT

     

     // //! VALIDATION
     // //! DUYỆT MẢNG, NẾU ID MẢNG TRÙNG LẶP ID USER THÌ ALERT 
     if(checkNum === false){
          return;
     }
     for ( var i = 0; i < studentArr.length; i++){
          if(studentArr[i].id === id){
               alert("Mã sinh viên bị trùng");
               return;
          }
     }
     var newStudent = new Student(id, name , type, math, physics, chemistry, training);
     studentArr.push(newStudent);
     console.log(studentArr);
     
     
     createTable();
     saveData();
};

//function 2 : hiện danh sách sinh viên Dynamic
// tạo động : trong studentArr có bao nhiêu sv thì bấy nhiêu <tr></tr>
var createTable = (data) => {
     //! trong trường hợp ko có params "data" thì nó là undefined
     //! nếu data bị undefined thì xài studentArr
     if(!data){
          data = studentArr;
     }

     var content = "";
     //! dùng nháy đơn bọc ID để convert thành chuỗi String
     for (var i = 0; i < data.length; i++){
          content += `<tr>    
                         <td>${data[i].id}</td> 
                         <td>${data[i].name}</td>
                         <td>${data[i].type}</td>
                         <td>9.8</td>
                         <td>${data[i].training}</td>  
                         <td>
                              
                              <button onclick="deleteStudent('${data[i].id}');" class="btn btn-danger">Xoá</button>
                              <button onclick="getStudentToUpdate('${data[i].id}')" class="btn btn-info">Sửa</button>
                         </td>
                    </tr>`;
     }
     // console.log(content);
     document.querySelector("#tbodySinhVien").innerHTML = content;
};

//function 3 : Delete student function

var deleteStudent = (id) => {
     //todo KIỂM TRA LỖI
     console.log("Kiểm tra lỗi");
     console.log(id);
     var index = findIndexById(id);

     if (index === -1){
          alert("Mã sinh viên không hợp lệ");
          return;
     }
     
     studentArr.splice(index, 1);
     //! gọi lại để update giao diện
     createTable();
};


//function 4 : Update student infomation function
//! để làm chức năng này cần 2 hàm
var getStudentToUpdate = (id) =>{
     var index = findIndexById(id);

document.querySelector('#txtMaSV').value = studentArr[index].id;
document.querySelector('#txtTenSV').value = studentArr[index].name;
document.querySelector('#loaiSV').value = studentArr[index].type;
document.querySelector('#txtDiemToan').value = studentArr[index].math;
document.querySelector('#txtDiemLy').value = studentArr[index].physics;
document.querySelector('#txtDiemHoa').value = studentArr[index].chemistry;
document.querySelector('#txtDiemRenLuyen').value = studentArr[index].chemistry;

//todo disable input ID;

     document.querySelector("#txtMaSV").setAttribute("disabled", true);


     document.querySelector("#btnAdd").style.display = "none";
     document.querySelector("#btnUpdate").style.display = "inline";
};
var updateStudent = () => {
     var id = document.querySelector('#txtMaSV').value;
     var name = document.querySelector('#txtTenSV').value;
     var type = document.querySelector('#loaiSV').value;
     var math = +document.querySelector('#txtDiemToan').value;
     var physics = +document.querySelector('#txtDiemLy').value;
     var chemistry = +document.querySelector('#txtDiemHoa').value;
     var training = +document.querySelector('#txtDiemRenLuyen').value;
     
     
     var index = findIndexById(id);

     studentArr[index].name = name;
     studentArr[index].type = type;
     studentArr[index].math = math;
     studentArr[index].physics = physics;
     studentArr[index].chemistry = chemistry;
     studentArr[index].training = training;
     createTable();
     
     //! clear input sau khi update xong cách thứ 1
// document.querySelector('#txtMaSV').value = "";
// document.querySelector('#txtTenSV').value = "";
// document.querySelector('#loaiSV').value = "";
// document.querySelector('#txtDiemToan').value = "";
// document.querySelector('#txtDiemLy').value = "";
// document.querySelector('#txtDiemHoa').value = ""
// document.querySelector('#txtDiemRenLuyen').value = "";

     //! clear input sau khi update xong cách thứ 2
     //! chỉ work khi toàn bộ HTML <div> đó được bọc trong thẻ form
     //todo phải gán type = "button". vì nếu không, mặc định nút bấm
     //todo sẽ là "submit"
     document.querySelector("#btnReset").click();
     //! xoá Disable ID
     document.querySelector("#txtMaSV").removeAttribute("disabled", true)


     document.querySelector("#btnUpdate").style.display = "none";
     document.querySelector("#btnAdd").style.display = "inline";
};

//! Search Student theo name hoặc ID
var searchStudent = () => {
     var foundStudents = [];
     var keyword = document.querySelector("#txtSearch").value;

     for (var i = 0; i < studentArr.length; i++){
          if (studentArr[i].id === keyword || studentArr[i].name.toLowerCase().includes(keyword.toLowerCase()) ){
               foundStudents.push(studentArr[i]);
          }
     }

     console.log(foundStudents);
     //! gán bên input là "oninput="function()"" **********

     createTable(foundStudents);
};



//function  : lưu data vào local storage
var saveData = () => {
     //! có sẵn trong Browser
     //todo param 1 : tên dữ liệu, param2 : dữ liệu muốn lưu
     //todo sử dụng JSON.stringify để convert thành string
     localStorage.setItem("students", JSON.stringify(studentArr));
};

//function  : Đổ database từ Local Storage

var fetchData = () => {
     var studentJSON = localStorage.getItem("students");

     //studentJSON === null => false
     if (studentJSON){
          //todo chuyển từ chuỗi JSON sang mảng
          studentArr = JSON.parse(studentJSON);
          createTable();
     }
};


var findIndexById = (id) => {
     //duyệt danh sách sinh viên, kiểm tra id === id; return vị trí
     //nếu tìm ko thấy, return về -1
     
     for (var i = 0; i < studentArr.length; i++){
          //todo CÁCH KIỂM TRA
          console.log(studentArr[i].id, id);
          if (studentArr[i].id === id){
     
               return i;
          }
     }
     return -1;
     
     //return index;
};

fetchData();



//!! ----------VALIDATIONS (required, minlength, maxlenghth)---------

var checkRequired = (value, errorId) => {
     if (value.length > 0){
          document.querySelector(errorId).innerHTML = "";
          return true;
     }
     document.querySelector(errorId).innerHTML = "*  Bắt buộc nhập";
     return false;
};

var checkLength = (value, errorId, min, max) =>{
     if(value.length >= min && value.length <= max){
          document.querySelector(errorId).innerHTML = "";
          return true;
     }
     document.querySelector(errorId).innerHTML = `Giá trị phải từ ${min} tới ${max} ký tự`
     return false;
}

var checkNum = (value, errorId, min, max) => {
     if (value >= min && value <= max){
          document.querySelector(errorId).innerHTML = "";
          return true;
     }
     document.querySelector(errorId).innerHTML = `điểm số khoảng ${min} - ${max}`;
     return false;
};


//PATTERN
//! cú pháp /"Syntax"/g
// ^ bắt đầu $ kết thúc
// \s cho phép khoảng trắng
// /g tìm toàn bộ
var checkText = (value, errorId) => {
     var pattern = /^[A-Za-z\s]+$/g;

     if(pattern.test(value)){
          document.querySelector(errorId).innerHTML = "";
          return true;
     }
     document.querySelector(errorId).innerHTML = "*Vui lòng nhập chữ";
     return false;

};