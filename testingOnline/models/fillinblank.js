import Question from "./question.js"

class FillInBlank extends Question {
    constructor(type, id, content, answer) {
        super(type, id, content, answer)
    }

    checkExact() {
        const answerFill = document.getElementById("answer-" + this.id).value;
        return answerFill.toLowerCase() === this.answers[0].content.toLowerCase();
    }


    render(index) {
        return `
        <div>
            <h1>Câu hỏi ${index}: ${this.content}</h1>
            <input type="text" class="answer-${this.id}" id="answer-${this.id}"/>
        </div>
    `
    }

}


export default FillInBlank;