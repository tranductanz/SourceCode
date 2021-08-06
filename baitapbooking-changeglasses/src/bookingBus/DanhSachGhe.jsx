import React, { Component } from 'react';
import DanhSachGheDangDat from './DanhSachGheDangDat';
import GheItem from './GheItem';

class DanhSachGhe extends Component {
    renderGhe = () => {
        const gheHTML = this.props.dataGhe.map((item, index) => {
            return (
                <div key={index} className="GheList col-3 p-4">
                    <GheItem
                        statusGhe={item.TrangThai}
                        selecting={this.props.selecting}
                        booking={this.props.booking}
                        ghe={item} />
                </div>
            )
        })
        return gheHTML;
    }



    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-6">
                        <h4>Tài xế</h4>
                        <div className="row">
                            {this.renderGhe()}
                        </div>

                    </div>
                    <div className="col-6">
                        <h4>Danh sách ghế đã đặt</h4>
                        <DanhSachGheDangDat deleting={this.props.deleting} booked={this.props.booked} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DanhSachGhe;