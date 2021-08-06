import React, { Component } from 'react';
import './Detail.css'
class Detail extends Component {

    render() {
        const { url, name, desc } = this.props.selectedProduct;
        return (
            <div>
                <div className="Detail">
                    <img src={url} alt="Thay kính" />
                </div>
                <div className="Text">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>

        );
    }
}

export default Detail;