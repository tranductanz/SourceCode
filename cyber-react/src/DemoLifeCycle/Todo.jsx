import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            counter: 1,
            todoList: [
                { id: 1, name: "Learn ReactJS" },
                { id: 2, name: "Learn NodeJS" },
                { id: 3, name: "Learn Database" },
            ]
        }
    }

    //! Lỗi thời, không còn sử dụng
    // componentWillUnmount() {
    //     console.log("will mount");
    // }
    handleIncreaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    handleIncreaseCounter2 = () => {
        this.setState({
            counter2: this.state.counter2 + 1,
        })
    }
    render() {
        console.log("todo render");
        return (
            <div>
                <h1>To Do List</h1>
                <button onClick={this.handleIncreaseCounter}>Increase Counter</button>
                <button onClick={this.handleIncreaseCounter2}>Increase Counter 2</button>
                <h2>Counter 1: {this.state.counter}</h2>
                <h2>Counter 2: {this.state.counter2}</h2>
                {this.state.todoList.map((item) => {
                    return <TodoItem
                        counter2={this.state.counter2}
                        key={item.id}
                        item={item} />
                })}
            </div>
        );
    }

    fetchTask() {
        console.log("calling api");
    }
    componentDidMount() {
        console.log("mounted");
        this.fetchTask();



        //cập nhật task
        setTimeout(() => {
            const cloneToDoList = [...this.state.todoList];
            //làm như vậy thì thằng PureComponent mới hiểu được mà tự thay đổi
            //khi thay đổi 1 object hoặc array thì nên shallow copy ra
            cloneToDoList[1] = { ...cloneToDoList[1], name: "Take a shower" };

            this.setState({
                todoList: cloneToDoList,
            });
        }, 3000);
    }
    //-----UPDATE LIFECYCLE------
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should update", nextState);
        return true;
    }

    // trước khi update sẽ chạy hàm này
    componentWillUpdate() {
        console.log("Will update");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Old Counter", prevState.counter);
        console.log("New Counter", this.state.counter);
    }

    //clean up logic
    componentWillUnmount() {

    }
}

export default Todo;