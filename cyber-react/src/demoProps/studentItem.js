import React, { Component } from 'react';
import './studentItem.css'
class studentItem extends Component {
    render() {
        return (
            <div className="item mb-3">
                <h1>Student Item</h1>
                <h4>Full Name : {this.props.student.name}</h4>
                <h4>Age: {this.props.student.age}</h4>
                <button
                    onClick={() => this.props.setSelectedStudent(this.props.student.name)} className="btn btn-dark">Select</button>
            </div>
        );
    }
}

export default studentItem;