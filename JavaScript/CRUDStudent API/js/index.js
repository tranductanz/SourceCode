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
  var id = document.querySelector("#txtMaSV").value;
  var name = document.querySelector("#txtTenSV").value;
  var type = document.querySelector("#loaiSV").value;
  var math = +document.querySelector("#txtDiemToan").value;
  var physics = +document.querySelector("#txtDiemLy").value;
  var chemistry = +document.querySelector("#txtDiemHoa").value;
  var training = +document.querySelector("#txtDiemRenLuyen").value;

  var isValid = true;
  isValid &= checkRequired(id, "#idError") && checkLength(id, "#idError", 6, 8);
  isValid &= checkRequired(name, "#nameError") && checkText(name, "#nameError");
  isValid &= checkNum(math, "#mathError", 0, 10);
  isValid &= checkNum(physics, "#physicsError", 0, 10);
  isValid &= checkNum(chemistry, "#chemistryError", 0, 10);

  return isValid;
};
// function 1 : Thêm sinh viên vào trong danh sách;
var addStudent = () => {
  if (!validateForm()) {
    return;
  }
  var id = document.querySelector("#txtMaSV").value;
  var name = document.querySelector("#txtTenSV").value;
  var type = document.querySelector("#loaiSV").value;
  var math = +document.querySelector("#txtDiemToan").value;
  var physics = +document.querySelector("#txtDiemLy").value;
  var chemistry = +document.querySelector("#txtDiemHoa").value;
  var training = +document.querySelector("#txtDiemRenLuyen").value;

  //todo VALIDATION DỮ LIỆU TỪ INPUT

  var newStudent = new Student(
    id,
    name,
    type,
    math,
    physics,
    chemistry,
    training
  );

  //! Đối với những API là "Add" thì thêm DATA vô
  axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
    method: "POST",
    // body của request
    data: newStudent,
  })
    .then((res) => {
      console.log(res);
      fetchData();
      // document.querySelector("#btnReset").click();
    })
    .catch((err) => {
      console.log(err);
    });
};




//! MAPPING DATA
var mapData = (data) => {
     var mappedData = [];

     //todo viết vòng for duyệt qua từng thằng sv Backend chuyển lại

     //logic
     for (var i = 0; i < data.length; i++){
          var mappedStudent = new Student
               (data[i].maSinhVien,
               data[i].tenSinhVien,
               data[i].loaiSinhVien,
               data[i].diemToan,
               data[i].diemLy,
               data[i].diemHoa,
               data[i].diemRenLuyen
               );
               mappedData.push(mappedStudent);     
     }
     return mappedData;
}
//function 2 : hiện danh sách sinh viên Dynamic
// tạo động : trong studentArr có bao nhiêu sv thì bấy nhiêu <tr></tr>
var createTable = (data) => {
  //! trong trường hợp ko có params "data" thì nó là undefined
  //! nếu data bị undefined thì xài studentArr
  if (!data) {
    data = studentArr;
  }

  var content = "";
  //! dùng nháy đơn bọc ID để convert thành chuỗi String
  for (var i = 0; i < data.length; i++) {
    content += `<tr>    
                         <td>${data[i].maSinhVien}</td> 
                         <td>${data[i].tenSinhVien}</td>
                         <td>${data[i].loaiSinhVien}</td>
                         <td>${data[i].calcAverage()}</td>
                         <td>${data[i].diemRenLuyen}</td>  
                         <td>
                              
                              <button onclick="deleteStudent('${data[i].maSinhVien}');" class="btn btn-danger">Xoá</button>
                              <button onclick="getStudentToUpdate('${data[i].maSinhVien}')" class="btn btn-info">Sửa</button>
                         </td>
                    </tr>`;
  }
  // console.log(content);
  document.querySelector("#tbodySinhVien").innerHTML = content;
};

//function 3 : Delete student function
//! đối với hàm DELETE thì dùng "params"
//todo maSinhVien sẽ đẩy lên URL
var deleteStudent = (id) => {
  axios({
    url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien`,
    method: "DELETE",
    params: {
      maSinhVien: id,
    },
  })
    .then((res) => {
      console.log(res);
      fetchData();
    })
    .catch((err) => {
      console.log(err);
    });
};

//function 4 : Update student infomation function
//! để làm chức năng này cần 2 hàm
//todo maSinhVien sẽ đẩy lên URL
var getStudentToUpdate = (id) => {
  axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien",
    method: "GET",
    params: {
      maSinhVien: id,
    },
  })
    .then((res) => {
      console.log(res.data);

      document.querySelector("#txtMaSV").value = res.data.maSinhVien;
      document.querySelector("#txtTenSV").value = res.data.tenSinhVien;
      document.querySelector("#loaiSV").value = res.data.loaiSinhVien;
      document.querySelector("#txtDiemToan").value = res.data.diemToan;
      document.querySelector("#txtDiemLy").value = res.data.diemLy;
      document.querySelector("#txtDiemHoa").value = res.data.diemHoa;
      document.querySelector("#txtDiemRenLuyen").value = res.data.diemRenLuyen;

      document.querySelector("#txtMaSV").setAttribute("disabled", true);

      document.querySelector("#btnAdd").style.display = "none";
      document.querySelector("#btnUpdate").style.display = "inline";
    })
    .catch((err) => {
      console.log(err);
    });
};

//! lụm thông tin user mới sửa, new ra 1 cái object mới
var updateStudent = () => {
  var id = document.querySelector("#txtMaSV").value;
  var name = document.querySelector("#txtTenSV").value;
  var type = document.querySelector("#loaiSV").value;
  var math = +document.querySelector("#txtDiemToan").value;
  var physics = +document.querySelector("#txtDiemLy").value;
  var chemistry = +document.querySelector("#txtDiemHoa").value;
  var training = +document.querySelector("#txtDiemRenLuyen").value;

  var updatedStudent = new Student(
    id,
    name,
    type,
    math,
    physics,
    chemistry,
    training
  );

  //! vì đã có dữ liệu update từ user, nên có thể truyền "data"
  axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien",
    method: "PUT",
    params: {
      maSinhVien: id,
    },
    data: updatedStudent,
  })
    .then((res) => {
      console.log(res);
      fetchData();
      document.querySelector("#btnReset").click();

      document.querySelector("#txtMaSV").removeAttribute("disabled", true);

      document.querySelector("#btnUpdate").style.display = "none";
      document.querySelector("#btnAdd").style.display = "inline";
    })
    .catch((err) => {
      console.log(err);
    });
};

//!Student theo name hoặc ID
var Student = () => {
  var foundStudents = [];
  var keyword = document.querySelector("#txt¬æ").value;

  for (var i = 0; i < studentArr.length; i++) {
    if (
      studentArr[i].id === keyword ||
      studentArr[i].name.toLowerCase().includes(keyword.toLowerCase())
    ) {
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

//! ĐỔ DATABASE API
//! LẤY DƯỜNG DẪN, với method là "GET"
//! nhớ check Status để xem thành công hay không
//! đầu 2xx là success
//! đầu 4xx là lỗi Front End
//! đầu 5xx là lỗi Back end
// var fetchData = () => {
//      //! Promise có 3 trạng thái : pending, fulfill, reject
//      //! promise, có thì trả value;
//      var promise = axios({
//           url : "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
//           method : "GET",
//      });

//      //! có 2 phương thức promise.then và promise.catch

//      promise.then((res) => {
//           studentArr = res.data;
//           createTable();
//           console.log("res", res);
//      });

//      promise.catch((err) => {
//           console.log("err", err);
//      });

// };
//todo cần đổ vào dữ liệu fetch
var fetchData = () => {
  var promise = axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    method: "GET",
  });
  promise.then((res) => {
     //! nhận data từ api backend đổi thành của mình
    studentArr = mapData(res.data);
    createTable();
  });
  promise.catch((err) => {
    console.log(err);
  });
};

var findIndexById = (id) => {
  //duyệt danh sách sinh viên, kiểm tra id === id; return vị trí
  //nếu tìm ko thấy, return về -1

  for (var i = 0; i < studentArr.length; i++) {
    //todo CÁCH KIỂM TRA
    console.log(studentArr[i].id, id);
    if (studentArr[i].id === id) {
      return i;
    }
  }
  return -1;

  //return index;
};

fetchData();

//!! ----------VALIDATIONS (required, minlength, maxlenghth)---------

var checkRequired = (value, errorId) => {
  if (value.length > 0) {
    document.querySelector(errorId).innerHTML = "";
    return true;
  }
  document.querySelector(errorId).innerHTML = "*  Bắt buộc nhập";
  return false;
};

var checkLength = (value, errorId, min, max) => {
  if (value.length >= min && value.length <= max) {
    document.querySelector(errorId).innerHTML = "";
    return true;
  }
  document.querySelector(
    errorId
  ).innerHTML = `Giá trị phải từ ${min} tới ${max} ký tự`;
  return false;
};

var checkNum = (value, errorId, min, max) => {
  if (value >= min && value <= max) {
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

  if (pattern.test(value)) {
    document.querySelector(errorId).innerHTML = "";
    return true;
  }
  document.querySelector(errorId).innerHTML = "*Vui lòng nhập chữ";
  return false;
};
