// const a = {
//      name : "david",
//      address  : {
//           city : "HCM",
//           district : "1",
//      }
// }


// Nếu sử dụng cách này thì sẽ ảnh hưởng Object "a";
// const b = a;

//! sử dụng cách clone sẽ không ảnh hưởng

//todo const b = {...a};
// const b = Object.assign(a, {});

// b.name = "tan";
// console.log(a);

//? khi clone Object chỉ clone được tầng đầu tiên, không clone được các tầng sau
//? khi đó, có cái khác gọi là deep clone
// const deepClone = (params) =>{
     
// }

// const b = deepClone(a);
const firstObject = {
     flag: 'Canada',
     country: {
       city: 'Toronto',
       color: "Red",
     },
   };
//! các cách để clone Object, cách 1 ... cach2 Object.assing({}, "object"); cách 3 là deepclone

//todo cách 1, normal clone
// const secondObject = {...firstObject};
// secondObject.flag = "Việt Nam";
// secondObject.country.city = "Hồ Chí Minh";
// secondObject.country.color = "Yellow";
// console.log(firstObject);
// console.log(secondObject);

//todo cách 2, deepClone để clone được tầng cao hơn
// const deepClone = JSON.parse(JSON.stringify(firstObject));
// deepClone.flag = "Việt Nam DEEP";
// deepClone.country.city = "Hồ Chí Minh DEEP";
// deepClone.country.color = "Yellow";

//! JSON.parse là để convert 1 chưỡi JSON, biến nó thành Object Javascript
const deepClone = (params) => {
     return JSON.parse(JSON.stringify(params));
     //! cách giải khác
     // const result = {};

     // for (key in params){
     //      if (typeof params[key] === "object"){
     //           result[key] = deepClone(params[key]);
     //      } else{
     //           result[key] = params[key];
     //      }
     // }
};

const third = deepClone(firstObject);
third.flag = "Việt Nam Func";
third.country.city = "Trần Tân DEEP func";
third.country.color = "Pink";
console.log(firstObject);
console.log(third);

//! có 2 kiểu là primitive và object
//!primitive
// const a = 10;
// const b = 10;
// console.log(a === b); // true

//! object
const a = {name: "tantan"};//false
const b = {name: "tantan"};//false

//! so sánh 2 Object
//! sử dụng JSON.stringify để chuyển 1 object sang JSON
const isEqual = (param1, param2) =>{
     return JSON.stringify(param1) === JSON.stringify(param2);
};

console.log(isEqual(a,b));






