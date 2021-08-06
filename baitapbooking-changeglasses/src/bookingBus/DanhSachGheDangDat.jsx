import React, { Component } from 'react';

class DanhSachGheDangDat extends Component {

    renderBooked = () => {
        return this.props.booked.map((item, index) => {
            const { TenGhe, Gia, SoGhe } = item.SoGheDat;
            return (
                <div key={index}>
                    <h4>
                        Ghế đã đặt : {TenGhe} {Gia}$
                        <button onClick={() => { this.props.deleting(SoGhe) }} className="btn btn-danger ml-2">Huỷ</button>
                    </h4>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderBooked()}
            </div>
        );
    }
}

export default DanhSachGheDangDat;