/*
Project: web thi trắc nghiệm
Chức năng :
    1. Hiển thị danh sách câu hỏi
    2. Cho người dùng làm bài và tính điểm

    Mock up giao diện
    */

import MultipleChoice from '../models/multiplechoice.js';
import FillInBlank from '../models/fillinblank.js';

//! questionList là 1 biến global để handle câu hỏi
let questionList = [];
const fetchQuestions = () => {
    axios({
        method: "GET",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
    })
        .then((res) => {
            console.log(res);
            questionList = mapData(res.data);
            renderQuestions(questionList);
        })
        .catch((err) => {
            console.log(err);
        })
}




const renderQuestions = (data) => {
    let htmlContent = "";
    for (const i in data) {
        htmlContent += data[i].render(+i + 1);
    }
    document.querySelector("#content").innerHTML = htmlContent;
};

//todo Hàm mapData cũ
// const mapData = (data) => {
//     //mảng kết quả sau khi map
//     const mappedData = [];
//     for (const item of data) {
//         //bốc tất cả thuộc tính từ item
//         const { questionType, id, content, answers } = item;

//         //!tên giống api type -> questionType
//         //! nhớ giống Constructor Object
//         if (questionType === 1) {
//             mappedData.push(new MultipleChoice(questionType, id, content, answers));
//         } else {
//             mappedData.push(new FillInBlank(questionType, id, content, answers));
//         }
//     }
//     return mappedData;
// };
//todo Hàm map data mới
const mapData = (data) => {
    const mappedData = data.map((item) => {
        const { questionType, id, content, answers } = item;
        if (questionType === 1) {
            return new MultipleChoice(questionType, id, content, answers);
        }
        return new FillInBlank(questionType, id, content, answers);
    })
    return mappedData;
};

//! tạo 1 biến global questionList để handle submit
//let questionList = [];

const handleSubmit = () => {
    let result = 0;

    for (const item of questionList) {
        if (item.checkExact()) {
            result++;
        }
    }
    location.reload();
    alert(`Tổng số câu đúng : ${result}/${questionList.length}`);
}

document.querySelector("#btnSubmit").onclick = handleSubmit;

fetchQuestions();
