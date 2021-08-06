import React, { Component } from 'react'
import './Slider.css'
export default class Slider extends Component {
    render() {
        return (
            <div className="slider">
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to={0} className="active" />
                        <li data-target="#carouselId" data-slide-to={1} />
                        <li data-target="#carouselId" data-slide-to={2} />
                    </ol>
                    <div className="slider-item carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/originals/fa/df/40/fadf4078833fa29a8b33eebe20abb630.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://wallpaperaccess.com/full/3625225.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/originals/fa/df/40/fadf4078833fa29a8b33eebe20abb630.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>


            </div>
        )
    }
}


