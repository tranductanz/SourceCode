import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductItem extends Component {

    handleSelect = () => {
        //phải có hàm connect()
        const { type, imgSrc_png: img } = this.props.item;
        this.props.dispatch({
            type: "SELECT_PRODUCT",
            payload: {
                type: type,
                img: img,
            }
        })
    }

    render() {
        const { imgSrc_jpg, name, } = this.props.item;
        return (
            <div className="card mb-3">
                <img src={imgSrc_jpg} alt="product" />
                <div className="card-body">
                    <p className="lead">{name}</p>
                    <button onClick={this.handleSelect} className="btn btn-success">Thử</button>
                </div>
            </div>


        );
    }
}

export default connect()(ProductItem);