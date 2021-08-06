//synchornous

var a = 5;
var sum = a + 10;
console.log(a);
console.log(sum);



setTimeout ( () => {
     console.log("A");
}, 5000);

setTimeout ( () => {
     console.log("D");
}, 0);