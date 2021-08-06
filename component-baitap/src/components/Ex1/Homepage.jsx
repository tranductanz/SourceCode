import React, { Component } from 'react';
import Carousel from './Carousel';
import Header from './Header';
import Laptop from './Laptop';
import Phone from './Phone';
import Promotion from './Promotion';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Phone />
                <Laptop />
                <Promotion />
            </div>
        );
    }
}

export default Homepage;