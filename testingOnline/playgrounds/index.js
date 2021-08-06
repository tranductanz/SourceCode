//!demo MAP

let students = [
    { name: "hieu", age: 12 },
    { name: "tan", age: 25 },
    { name: "tai", age: 13 },
    { name: "thuong", age: 24 },
];

//! Hàm FIND
const foundStudent = students.find((item) => {
    return item.name === "tan";
});
console.log(foundStudent);

//! Hàm FIND INDEX
const foundIndexStudent = students.findIndex((item) => {
    return item.name === "tan";
})
console.log(`Vị trí là : ${foundIndexStudent} `);

//! Hàm FILTER
const foundAge = students.filter((item) => {
    return item.age >= 15;
})
console.log(foundAge);


//todo mỗi lần lặp phần tử, thì chạy function
const studentName = students.map((item) => {
    return item.name;
});

console.log(studentName);
// => ["hieu", "tai", "tan"]

const nums = [1, 2, 3, 4];
//[2,4,6,8];

const doubleNum = nums.map((item) => {
    return item * 2;
});
console.log(doubleNum);