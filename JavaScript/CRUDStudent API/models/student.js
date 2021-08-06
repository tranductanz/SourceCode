function Student(id, name, type, math, physics, chemistry, training){
     this.maSinhVien = id;
     this.tenSinhVien = name;
     this.loaiSinhVien = type;
     this.diemToan = math;
     this.diemLy = physics;
     this.diemHoa = chemistry;
     this.diemRenLuyen = training;

     this.calcAverage = () =>{
          return (this.diemToan + this.diemLy + this.diemHoa)/3;
          
     }
}
