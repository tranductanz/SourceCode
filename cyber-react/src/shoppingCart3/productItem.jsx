import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { name, img } = this.props.prod;
    return (
      <div className="card">
        <img style={{ height: 250, width: "100%" }} src={img} alt="product" />
        <div className="card-body">
          <h4>{name}</h4>
          <button
            onClick={() => this.props.setSelectedProduct(this.props.prod)}
            className="btn btn-info"
          >
            Chi tiết
          </button>
          <button
            onClick={() => this.props.addToCart(this.props.prod)}
            className="btn btn-danger"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
