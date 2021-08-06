import React, { Component } from 'react';
import redCar from '../assets/img/red-car.jpg';
import blackCar from '../assets/img/black-car.jpg';
import silverCar from '../assets/img/silver-car.jpg';

class Car extends Component {


    state = {
        imgSource: redCar,
    }

    handleChangeColor = (image) => {
        //! đây là clorsure
        return () => {
            this.setState({
                imgSource: image,
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img src={this.state.imgSource} alt="Car" className="w-100" />
                    </div>
                    <div className="col-4 d-flex mt-4 justify-content-around align-items-start">
                        <button onClick={this.handleChangeColor(redCar)} className="btn btn-danger">Red</button>
                        <button onClick={this.handleChangeColor(silverCar)} className="btn btn-secondary">Silver</button>
                        <button onClick={this.handleChangeColor(blackCar)} className="btn btn-dark">Black</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Car;