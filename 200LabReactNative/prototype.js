const demo = [{
    name : "Tân",
    name : "Iu",
    nmae : "Thương"
}];
const a = [2,4,5];
//callback
const callback = (element) =>{
    console.log(element);
};

const callbackMap = (element) =>{
    return element * 2;
};

//! filter chỉ nên return boolean
const callbackFilter = (element) =>{
    return element % 2 === 0;
};

//! reduce
//todo accuracy là phần tử cuối
//todo currentValue là phần tử hiện tại
const callbackReduce = (accuracy, currentValue) =>{
    return accuracy + currentValue;
    // 2,4,5 sẽ ra 11
    // lướt qua [2,4,5]
    //đầu tiên cho current value = 0;
    // + với accuracy là 2
    // value "1" là 2; giữ value
    // lấy 2 + 4 là 6; accu là 6, giữ 6;
    // đi qua tiếp là 5, + với accu cũ là 6
    // vậy đáp án là 11
};

//prototype
//? forEach lặp từng phần tử
// a.forEach(callback);

//? map là hàm tạo ra mảng mới, duyệt từng phần tử, biến đổi nó
const b = a.map(callbackMap);
console.log(b);

//? hàm filter
//? với mỗi phần tử đúng điều kiện, thì mới lụm ra bỏ vào
const c = a.filter(callbackFilter);
console.log(c);

//? reduce lướt qua từng phần tử, truyền vào tham số
//! nhưng nó lưu biến tạm, nhớ riêng biến khác, lưu lại giá trị cuối cùng
const d = a.reduce(callbackReduce, 0);
console.log(d);

const e = demo.reduce(callbackReduce, {});
console.log(e);

