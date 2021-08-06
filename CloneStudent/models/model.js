// tạo 1 Object để object này sang folder models
//truyền vào những param cần thiết
// trong bài này cần
// id, name, type, math, physical, chemistry, training

// khởi tạo lớp đối tượng
function Student(id, name, type, math, physics, chemistry, training){
     this.id = id;
     this.name = name;
     this.type = type;
     this.math = math;
     this.physics = physics;
     this.chemistry = chemistry;
     this.training = training;
     this.calcAverage = () => {
          return (this.math + this.physics + this.chemistry)/3;
     }
};