var studentArr = [];

//function 1 : Thêm sinh viên vào trong danh sách

var addStudent = () => {
     var id = document.querySelector("#txtMaSV").value;
     var name = document.querySelector("#txtTenSV").value;
     var type = document.querySelector("#loaiSV").value;
     var math = +document.querySelector("#txtDiemToan").value;
     var physics = +document.querySelector("#txtDiemLy").value;
     var chemistry = +document.querySelector("#txtDiemHoa").value;
     var training = +document.querySelector("#txtDiemRenLuyen").value;

     //VALIDATION
     //DUYỆT MẢNG, NẾU TRÙNG LẶP ID SẼ ALERT

     for (var i = 0; i < studentArr.length; i++){
          if (studentArr[i].id === id){
               alert("ID đã bị trùng, xin thử lại");
               return;
          }
     }

     // khai báo newStudent

     var newStudent = new Student(id, name, type, math, physics, chemistry, training);
     studentArr.push(newStudent);
     console.log(studentArr);
     createTable();
     saveData();
};

var createTable = () => {
     // muốn tạo table đầu tiên phải có biến content rỗng
     var content = "";
     //duyệt mảng để đưa table vào
     //! bọc bằng 1 nháy đơn sẽ biến nó thành String
     for (var i = 0; i < studentArr.length; i++){
          content += `<tr>
                         <td>${studentArr[i].id}</td>
                         <td>${studentArr[i].name}</td>
                         <td>${studentArr[i].type}</td>
                         <td>9.8</td>
                         <td>${studentArr[i].training}</td>
                         
                         <td><button onclick="deleteStudent('${studentArr[i].id}');" class="btn btn-danger">Xoá</button></td>
                    </tr>`
     }
     console.log(content);
     document.querySelector("#tbodySinhVien").innerHTML = content;
};

//function Find Index luôn luôn sẽ có trong 1 app
//!param cần có là ID
var findIndexById = (id) => {
     // duyệt danh sách sinh viên, kiểm tra id === id return vị trí
     // nếu ko tìm thấy return -1;

     for (var i = 0; i < studentArr.length; i++){
          if (studentArr[i].id === id){
               return i;
          }
     }
     return -1;
};

var deleteStudent = (id) => {
     // tạo ra 1 biến index chứa hàm findIndex
     // nếu index -1 (ko có, thì mã số index ko hợp lệ)

     var index = findIndexById(id);

     if (index === -1){
          alert("Mã sinh viên không hợp lệ");
          return;
     }

     //cắt chuỗi lấy vị trí từ index cắt 1 đơn vị
     studentArr.splice(index, 1);
     //sau khi xoá thì update lại bảng mới
     createTable();
};


// hàm save Data

var saveData = () => {
     //! bởi vì studentArr bây giờ đang là String, cần convert thành JSON
     localStorage.setItem("students", JSON.stringify(studentArr));
};

var fetchData = () => {
     // tạo 1 biến chứa studentJSON
     var studentJSON = localStorage.getItem("students");

     if (studentJSON){
          studentArr = JSON.parse(studentJSON);
          createTable();
     }
}


//nhớ chạy hàm
fetchData();