import {showMessage, fullName} from "./test.js";



// REST PARAMETER
// Gộp tất cả tham số đầu vào thành mảng
const calcSum = (...params) =>{
    console.log(params);
    let sum = 0;
    for (let i = 0; i < params.length; i++){
        sum+= params[i];
    }
    console.log(sum);
}
calcSum(1,2);
calcSum(1,2,3,4);


// SPREAD OPERATOR
const student1 = {
    name: "Tân",
}

//todo primitivetype : string, number, boolean
//todo references type : object, array;
//nếu gán thì nó chỉ lưu địa chỉ vùng nhớ của Object
const student2 = {...student1};

student2.name = "Trần Tân";
console.log(student1, student2);

const car1 = {
    name: "audi",
}
const car2 = {
    name: "audi",
}

const newCar1 = (JSON.stringify(car1));
const newCar2 = (JSON.stringify(car2));

console.log(newCar1 === newCar2);


const car3 = ["audi", "bwm"];
const car4 = [...car3, "candilac", "honda"];

// car4.push("merc");
console.log(car3, car4);


// DESTRUCTURING
// bốc thuộc tính ra sử dụng
let product = {
    name: "iphone",
    price: 2000,
    type: "smartphone",
}

const {name: productName, type} = product;

const movie = {
    name : "avenger",
    rating: 10,
}

const {name: movieName} = movie;
console.log(productName, type);
console.log(movieName);


// OBJECT LITERAL
const name = "tân";
const age = 18;

const student = {name, age};
console.log(student);


// FOR IN VÀ FOR OF
const cars = ["audi", "merc", "honda", "lexus"];

//! LOG INDEX
// for (let index in cars){
//     console.log(idnex);
// }

//!LOG VALUE
// for (let item of cars){
//     console.log(item);
// }

console.log(fullName);
showMessage();