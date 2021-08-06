import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{ backgroundColor: 'black', textAlign: 'center', padding: '15px 0', color: 'white' }}>
                Copyright by Mr.Nguyen
            </div>

        );
    }
}

export default Footer;