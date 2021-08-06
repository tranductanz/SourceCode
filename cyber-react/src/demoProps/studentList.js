import React, { Component } from 'react';
import StudentItem from './studentItem';
import './studentList.css';
class studentList extends Component {
    // fullName = "Trần Đức Tân";
    // age = 13;

    students = [
        { id: 1, name: "Tân", age: 25 },
        { id: 2, name: "Thương", age: 24 },
    ]

    state = {
        selectedStudent: "",
    }

    setSelectedStudent = (val) => {
        this.setState({
            selectedStudent: val,
        })
    }



    renderStudents = () => {
        const studentHTML = this.students.map((item) => {
            return (
                <StudentItem key={item.id} student={item} setSelectedStudent={this.setSelectedStudent} />
            )
        });
        return studentHTML;
    }

    render() {
        return (
            <div className="list">
                <h1>Student List</h1>
                <p>Selected Studens: {this.state.selectedStudent}</p>
                {/* <StudentItem name={this.fullName} age={this.age} /> */}
                {this.renderStudents()}


            </div>
        );
    }
}

export default studentList;