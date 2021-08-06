//! Bài 1
/*
    *Bảng số gồm 10 hàng và 10 cột
    *Các giá trị trong hàng là liên tiếp nhau
    *Các giá trị trong cột hơn kém nhau 10
 */
function printOnetoOneHundred() {
    var content = "";
    for (var i = 1; i <= 100; i = i + 10) {
        for (var k = i; k < i + 10; k++) {
            content += k + " ";
        }
        content += "\n";
    }
    console.log(content);
}

//! Bài 2
var numList = [];

function addNumArr() {
    var addNum = document.getElementById("addNum").value;
    var temp = addNum.split(",");
    for (var i = 0; i < temp.length; i++) {
        numList.push(+temp[i]);
    }
    console.log(numList);
}

function swapNum(i, k) {
    var temp = numList[i];
    numList[i] = numList[k];
    numList[k] = temp;
}

function sortBubbleNum() {
    for (var k = 0; k < numList.length; k++) {
        for (var i = 0; i < numList.length; i++) {
            if (numList[i] > numList[i + 1]) {
                swapNum(i, i + 1);
            }
        }
    }
    console.log(numList);
}

function findSum() {
    var i = 0;
    var k = numList.length - 1;
    while (i < k) {
        var sum = numList[i] + numList[k];
        if (sum === 10) {
            console.log("Có");
            return;
        } else if (sum > 10) {
            k--;
        } else {
            i++;
        }
    }
    console.log("Không có số nào");
}

function isNotPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

function findPrimeNum() {
    var myPrimeArray = numList.filter(isNotPrime);
    console.log(myPrimeArray);
}

//! Bài 3
function calcSumNum() {
    var sum = 0;
    var number = +document.getElementById("numSum").value;
    if (number < 0) {
        console.log("Đừng nhập số âm");
        return;
    }
    for (var i = 2; i <= number; i++) {
        sum += i;
    }
    sum = sum + number + 2 * number;
    console.log(sum);
}

//! Bài 4
function findDivisor() {
    var numDivisor = +document.getElementById("numDivisor").value;
    var content = "";
    for (var i = 0; i <= numDivisor; i++) {
        if (numDivisor % i === 0) {
            content += i + ", ";
        }
    }
    if (numDivisor < 0) {
        console.log("Đừng nhập số âm");
        return;
    }
    console.log(`Ước số của ${numDivisor} là`, content);
}

//! Bài 5
function reverseNum() {
    var newReverseString = "";
    var txtNum = document.getElementById("txtNum").value;
    var stringToChar = txtNum.split("");
    var reverseString = stringToChar.reverse();
    newReverseString = reverseString.join();
    var newnum = newReverseString.replaceAll(",", "");
    console.log(newnum);
}

//! Bài 6
function findX() {
    var sum = 0;
    var i = 0;
    while (sum + i <= 100) {
        i++;
        sum += i;
    }
    console.log(i);
}

//Cách findX thứ 2
// var sum = 0;
//
// for (var i = 1; sum + i <= 10; i++) {
//     sum += i;
//     var newnum = i;
// }
//
// console.log(newnum);

//! Bài 7
function numMultiple() {
    var numMultiple = document.getElementById("numMultiple").value;

    for (var i = 0; i <= 10; i++) {
        var result = numMultiple * i;
        console.log(`${numMultiple} x ${i} = `, result);
    }
}
//! Bài 8
function dealCards(){
    var cards = [
        "4K", "KH", "5C","KA",
        "QH", "KD",
        "2H", "10S", "AS",
        "7H", "9K", "10D"
    ];

    var player1 =[];
    var player2 =[];
    var player3 =[];
    var player4 =[];

    for (var i = 0; i < cards.length; i = i + 4)
    {
        player1.push(cards[i]);
        player2.push(cards[i+1]);
        player3.push(cards[i+2]);
        player4.push(cards[i+3]);
    }
    console.log(` người chơi thứ 1 có bài là : ${player1} `);
    console.log(` người chơi thứ 2 có bài là : ${player2} `);
    console.log(` người chơi thứ 3 có bài là : ${player3} `);
    console.log(` người chơi thứ 4 có bài là : ${player4} `);
    
}
//! Bài 9
function countDogChicken(){
    var animals = +document.getElementById("animals").value;
    var legs = +document.getElementById("animalLegs").value;

    for(i = 0; i <= 100;i++){
        if((i * 2 + (animals-i)*4) === legs){
            console.log(`Số con gà : ${i}`);
            console.log(`Số con chó : ${36-i}`);
        }
    }
}
//! Bài 10
function calcAngle() {
    var hour = document.getElementById("hourNum").value;
    var minutes = document.getElementById("minuteNum").value;

    var degreeMinutes = minutes * 6;
    var degreeHours = hour * 30;
    if (degreeHours === 0){
        degreeHours += 360;
    }
    var degreeInside = degreeHours - degreeMinutes;
    if (degreeHours < degreeMinutes){
        degreeInside = -degreeInside;
    }
    var degreeOutside = 360 - degreeInside;
    console.log(degreeInside, "Độ trong");
    console.log(degreeOutside, "Độ ngoài");




}
