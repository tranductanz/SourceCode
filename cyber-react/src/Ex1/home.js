import React, { Component } from 'react';
import Header from './header'
import Content from './content'
import Sidebar from './sidebar'
import Footer from './footer'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Sidebar/>
                    <Content/>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Home;