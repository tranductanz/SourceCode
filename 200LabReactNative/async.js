// console.log("a");

//async

//!callback hell
// setTimeout(() =>{
//     console.log("b");
//     setTimeout(() =>{
//         console.log("c");
//         setTimeout(() =>{
//             console.log("b");
//             setTimeout(() =>{
//                 console.log("b");
//                 setTimeout(() =>{
//                     console.log("b");                  
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


//! cách async cũ
// fetch(
//     "url----"
// ).then(() =>{
//     console.log("c");
//     return fetch("url2");
// }) 
// .then(() =>{
//     console.log("d");
// })

//! async await
await fetch(
    "url----"
);
console.log("c");
await fetch("url2");
console.log("d");

 


