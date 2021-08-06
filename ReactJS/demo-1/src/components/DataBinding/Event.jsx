import React, { Component } from 'react';

export default class Event extends Component {
    handleShowMessage = () => {
        alert("Hello Trần Tân");
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.handleShowMessage}>Show Message</button>
            </div>
        );
    }
}
