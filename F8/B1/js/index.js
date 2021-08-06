// var age = 18;
// var PI = 3.14;

// // number -> string
// console.log(age.toString()); 

// //làm tron
// // nếu < .5 thì tròn xuống
// // nếu có params thì làm tròn số lượng
// console.log(PI.toFixed(3));


// var languages = [
//      "PHP",
//      "Java",
//      "Javascript",
//      "Ruby"
// ];
// // kiểm tra phải array không;
// console.log(Array.isArray(languages));

// //Xóa rồi chén
// // param 1 : vị trí
// // param 2 : count xóa

// languages.splice(1, 2, "Dart");
// console.log(languages);


// var a = 1;
// var b = 2;
// var c = 3;

// var result = a && b && c;
// console.log(result);
// var content = "JS và js";
// var rest = content.replace("JS", "Javascript");
// console.log(rest)

// content.toLowerCase

// var number = 10;

//     console.log(isNaN(number));






function run(a) {
     a = 50;
     var result = a === parseInt(a) ? a : Math.floor(a);
      console.log(result);
 }
 
run();