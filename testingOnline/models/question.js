class Question {
    // phương thức khởi tao mặc định có sẵn trong class
    constructor(type, id, content, answers) {
        this.questionType = type;
        this.id = id;
        this.content = content;
        this.answers = answers;
    }

    //todo checkExact(), đây là hàm cùng cấp với constructor

    checkExact() { }

    render() { }
}

export default Question;