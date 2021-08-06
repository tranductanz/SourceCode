import React, { Component } from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';

class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Intro />
                <Footer />
            </div>
        );
    }
}

export default Index;