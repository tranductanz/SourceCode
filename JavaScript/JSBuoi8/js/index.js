// Object
// var student1 = {
//      //key : value
//      name: "hieu",
//      age: 12,
//      email : "hieu@gmail.com",

//      calcAverage(){
//           return 9;
//      }
// };

// var student2 = {
//      name : "dung",
//      age: 13,
//      email : "dung@gmail.com",

//      calcAverage(){
//           return 10;
//      }
// };


// console.log(student1.name, student1.email, student1.calcAverage() );
// console.log(student2.name, student2.email, student2.calcAverage());


//! Lớp đối tượng viết hoa chữ cái đầu
function Dog(name,age, height, weight, breed, hasBirthCertificate){
     this.name = name
     this.age = age;
     this.height = height;
     this.weight = weight;
     this.breed = breed;
     this.hasBirthCertificate = hasBirthCertificate;

     //! cách tạo function trong object
     this.bark = function(){
          console.log("Gâu Gâu");
     }
}

var dog1 = new Dog("Mina", 5, 30, 20, "Chó Cỏ", true);
var dog2 = new Dog("Pi", 13, 50, 5, "Chó Ta", false);

console.log(dog2.bark ,dog1, dog2);


// var dog1 = {
//      name : "Alice",
//      age : 2,
//      height : 30,
//      weight : 3,
//      breed : "Alaska",
//      hasBirthCertificate : true,

//      bark(){
//           console.log("Gâu Gâu");
//      }
// };

// var dog2 = {
//      name : "Lisa",
//      age : 3,
//      height : 50,
//      weight : 2,
//      breed : "Poddle",
//      hasBirthCertificate : false,

//      bark(){
//           console.log("Meo Meo");
//      }
// };

// var dogCenter = {
//      name : "CyberDog",
//      address : "496DuongQuangHam",
//      ceo : {
//           name : "Tran Duc Tan",
//           age : 25
//      },
//      dogs : [dog1, dog2]
// };


// console.log(dogCenter.ceo.name);

// console.log(dogCenter["name"], dogCenter["address"]);

// for (var i = 0; i < dogCenter.dogs.length; i++){
//      console.log(dogCenter.dogs[i].name);
// }


// //add property cho đối tượng
// dogCenter.phone = "0988581423";
// //update property cho đối tượng
// dogCenter.address = "Dương Quảng Hàm";

// //delete property object
// delete dogCenter.address;


// console.log(dogCenter);