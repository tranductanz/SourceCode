/**
 * 1)cho ngườI dùng nhập vào thông tin của sinh viên
 * 2)Tạo 1 đối tượng, lưu hết thông tin user nhập
 * => 5 thuộc tính, 2 method tính điểm và xếp loại
 * var student = {name : "", id : ""}
 *
 * 3)Hiện tên, mã, loại, ra phiếu bên tay phải
 *
 * 4)Lưu 2 phương thức: tính điểm, xếp loại cho đối tượng
 */

//!tao lớp đối tượng student (prototype - hoặc Class)
function Student(studentId, studentName, studentType, mathGrade, literatureGrade){
     this.id = studentId;
     this.name = studentName;
     this.type = studentType;
     this.math = mathGrade;
     this.literature = literatureGrade;
     this.calcAverage = function(){
        //! trong phạm vị object
        return (this.math + this.literature)/2;
     },
     this.classify = function() {
          if (this.calcAverage() >= 5){
             return "Giỏi";
          }
          //! Không cần else vì nếu return "Giỏi" là break;
               return "Yếu";
     }
}


function showInfo() {
  var studentId = document.getElementById("txtMaSV").value;
  var studentName = document.getElementById("txtTenSV").value;
  var studentType = document.getElementById("loaiSV").value;
  var mathGrade = +document.getElementById("txtDiemToan").value;
  var literatureGrade = +document.getElementById("txtDiemVan").value;

//   var student = {
//        id : studentId,
//        name : studentName,
//        type : studentType,
//        math : mathGrade,
//        literature : literatureGrade,
//   }

//!Instance
var newStudent = new Student(studentId, studentName, studentType, mathGrade, literatureGrade);


  document.getElementById("spanTenSV").innerHTML = student.name;
  document.getElementById("spanMaSV").innerHTML = student.id;
  document.getElementById("spanLoaiSV").innerHTML = student.type;
  document.querySelector("#spanDTB").innerHTML = student.calcAverage();
  document.querySelector("#spanXepLoai").innerHTML = student.classify();
}
