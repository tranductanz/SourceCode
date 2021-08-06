
//! check dieu kien truoc
// while (n<=100){
//      var n = 1;
//      console.log(n);
// }

//! lam truoc roi moi check dieu kien
// do {
//      console.log(n);
//      n += 2;
// } while (n <=100);


//! khi sử dụng break, sẽ kết thúc vòng lặp
//! khi sử dụng return sẽ cut luôn;
// function a(){
//      for (var i = 1; i <= 100; i++){
//           console.log(i);
//           break;
//      }
//      console.log("Tân");
// }
// a();



// in tất cả chẳn lẽ < 100
// function checkNum(){
//      for (var x = 0; x <= 100; x++){
//           if (x % 2 === 0){
//                console.log(x, "là số chẵn");
//           }
//           else{
//                console.log(x, "là số lẽ");
//           }
//      }
// }

// function sumEven(){
//      var total = 0;
//      var n = 10;
//      for (var i = 0; i <= n; i++){
//           total = total + i;
//      }
//      console.log("Tổng các số chẵn :", total);
// }

// function countDivision3(){
//      var count = 0;
//      for (var i =0; i<= 1000; i++){
//           if ( i % 3 === 0){
//                count++;
//           }
//      }
//      console.log("có %d số chẵn", count);
// }
// checkNum();
// sumEven();
// countDivision3();



// function findI() {
//      var i = 1;
//      var total = 0;
//      while (total < 10){
//           total = total + i;
//           i++;
//      }
//      console.log(i);
// }
// findI();


// function sum(){
//      var total = 0;
//      var n = 4;
//      var x = 2;

//      for (var i = 0; i<= n;i++){
//           total = total + n**i;
//      }
//      console.log(total);
// }

// sum();


// function factorial(){
//      total = 1;
//      var n = 5;
//      for (var i = 1; i <= n; i++){
//           total = total * i;
//      }
//      console.log(total);
// }
// factorial();


// function isPrime(){
//      var n = 7;
//      for (var i = 2; i < n/2; i++){
//           if(n % i === 0){
//                console.log("%d không phải số nguyên tố", n);
//                return;
//           }
//      }

//      console.log(n, "chính là số nguyên tố");
// }
// isPrime();

//! vòng for ở ngoài chạy 1 lần,
//! for ở trong sẽ chạy hết
function printSquare(n){
     var edge = "";
     for (var j = 1; j <= n; j++){
          for (var i = 1; i<= n; i++){
          edge += "* ";
     }
     edge += "\n";
}
console.log(edge);

}

printSquare(5);