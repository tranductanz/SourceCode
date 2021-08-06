import React, { Component } from "react";

class Detail extends Component {
  render() {
    const { name, img, screen, frontCamera, backCamera, desc } =
      this.props.selectedProduct;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <h4>{name}</h4>
            <img className="w-100" src={img} alt="product" />
          </div>
          <div className="col-7">
            <h5>Thông số kĩ thuật</h5>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{screen}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{frontCamera}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td> {backCamera}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{desc}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
