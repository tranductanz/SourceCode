import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        <h1 className="text-primary">Trần Tân</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item  mr-3">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item  mr-3">
                                <a className="nav-link" href="#">Courses</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item  mr-3">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item  mr-3">
                                <a className="nav-link" href="#">Element</a>
                            </li>
                            <li className=" nav-item mr-3">
                                <a className="tel nav-link text-white" href="#"> <i className="fa fa-phone" /> (+1) 555
                                    234-8765</a>
                            </li>
                            <li className="social nav-item d-flex">
                                <a className="nav-link" href="#"> <i className="fab fa-facebook-f" /></a>
                                <a className="nav-link" href="#"> <i className="fab fa-twitter" /></a>
                                <a className="nav-link" href="#"> <i className="fab fa-instagram" /></a>
                                <a className="nav-link" href="#"> <i className="fab fa-youtube" /></a>
                            </li>
                        </ul>
                    </div>
                </nav>


            </div>
        )
    }
}





