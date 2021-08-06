function Student(id, name, type, math, physics, chemistry, training){
     this.id = id;
     this.name = name;
     this.type = type;
     this.math = math;
     this.physics = physics;
     this.chemistry = chemistry;
     this.training = training;

     this.calcAverage = () =>{
          return (this.math + this.physics + this.chemistry)/3;
          
     }
}
