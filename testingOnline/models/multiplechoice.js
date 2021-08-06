import Question from "./question.js";

class MultipleChoice extends Question {
    constructor(type, id, content, answers) {
        //kế thừa toàn bộ constructor của thằng cha
        super(type, id, content, answers);

        //thêm
        //this.name = name
    }

    checkExact() {
        // 1. check xem user chọn input nào
        const answerInput = document.getElementsByClassName("answer-" + this.id);

        let answerId;
        //todo cách cũ
        // for (const item of answerInput) {
        //     if (item.checked) {
        //         answerId = item.value;
        //         break;
        //     }
        // }
        //! tìm ra đối tượng input trong mảng (checked)
        const foundInput = [...answerInput].find((item) => {
            return item.checked;
        })

        // 2. kiểm tra thí sinh có check input hay không
        // nếu không return false
        // if (!answerId) return false;
        if (!foundInput) return false;
        answerId = foundInput.value;
        // 3. dựa vào id, tìm ra đối tượng đáp án trong danh sách
        // tìm ra đối tượng đáp án => check exact
        // for (const item of this.answers) {
        //     if (item.id === answerId) {
        //         return item.exact;
        //     }
        // }
        const foundAnswer = this.answers.find((item) => {
            return item.id === answerId;
        });
        //? return true
        return foundAnswer.exact;
    }

    //hàm render câu hỏi MultipleChoice HTML
    render(index) {
        //Lặp 4 đáp án
        let answersHTML = "";
        //lụm đối tượng
        //duyệt đáp án
        //! cho name giống nhau, radio sẽ đc chọn 1
        //! chọn input nào (checked) => id đáp án (input.value)
        //todo Chọn class name vì có thể nhận đc 1 mảng [] value
        for (const item of this.answers) {
            answersHTML += `
                <div>
                    <input type="radio" class="answer-${this.id}" value="${item.id}" name="answers-${this.id}" />
                    <label>${item.content}</label>
                </div>
                `
        }
        return `
        <div>
            <h1>Câu hỏi ${index}: ${this.content}</h1>
            ${answersHTML}
        </div>
    `
    }
}



export default MultipleChoice;