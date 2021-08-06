import React, { Component } from "react";

class Cart extends Component {




  renderCart = () => {
    return this.props.cart.map((item) => {
      // cart = [{ product: {}, quantity: 1 }];
      const { id, name, img, price } = item.product;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <img style={{ width: 120 }} src={img} alt="product" />
          </td>
          <td>{name}</td>
          <td>
            <button className="btn btn-info">-</button>
            <span>{item.quantity}</span>
            <button
              onClick={() => this.props.increaseQuantity(id)}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{item.quantity * price}</td>
          <td>
            <button className="btn btn-danger">Xoá</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>

                <tbody>{this.renderCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Đóng
              </button>
              <button
                onClick={this.props.makePayment}
                type="button"
                className="btn btn-primary"
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
