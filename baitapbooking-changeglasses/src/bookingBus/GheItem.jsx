import React, { Component } from 'react';
import './GheItem.css'
class GheItem extends Component {
    checkRequire = () => {
        if (this.props.selecting === this.props.ghe.SoGhe) {
            return "btn btn-success";
        }
        if (this.props.statusGhe) {
            return "isBooked btn btn-danger"
        }
        else if (this.props.selecting) {
            return "btn btn-light"
        }
    }
    render() {
        console.log();
        return (
            <div>
                <button
                    onClick={() => { this.props.booking(this.props.ghe) }}
                    className={
                        this.checkRequire()
                    }>
                    {this.props.ghe.SoGhe}
                </button>
            </div>
        );
    }
}

export default GheItem;