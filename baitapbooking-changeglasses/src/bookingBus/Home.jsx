import React, { Component } from 'react';
import DanhSachGhe from './DanhSachGhe';
import dataGhe from '../data/bookingBus.json';
import './Home.css';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selecting: {},
            listGheBooking: [],
            trangThai: "",
        }
    }

    deletingGhe = (value) => {
        const cloneBooking = [...this.state.listGheBooking];

        const foundItem = cloneBooking.findIndex((item) => {
            return item.SoGheDat.SoGhe === value;
        })
        cloneBooking.splice(foundItem, 1);
        this.setState({
            listGheBooking: cloneBooking,
        })
    }

    bookingGhe = (value) => {
        const cloneBooking = [...this.state.listGheBooking];
        const foundItem = cloneBooking.find((item) => {
            return item.SoGheDat.SoGhe === value.SoGhe;
        })
        const foundIndex = cloneBooking.findIndex((item) => {
            return item.SoGheDat.SoGhe === value.SoGhe;

        })
        const bookingItem =
        {
            SoGheDat: value,
            isBooking: false,
        };
        const clone = { ...bookingItem };
        if (!foundItem) {
            cloneBooking.push(bookingItem);
            this.setState({
                selecting: clone.SoGheDat.SoGhe,
            })
        }
        else if (foundItem) {
            cloneBooking.splice(foundIndex, 1);
            this.setState({
                selecting: {},
            })
        }
        this.setState({
            listGheBooking: cloneBooking,
        })
    }




    render() {
        return (
            <div className="container">
                <h1 className="text-center">Đặt vé xe Tăng hãng CyberSoft</h1>
                <div className="text-center">
                    <h2 className="text-danger">Lưu Ý :</h2>
                    <div className="row">
                        <div className="col-4">
                        </div>
                        <div className="col-6">
                            <div className="d-flex mb-3">
                                <div className="RedSquare"></div>
                                <h3 className="mt-2 ml-5">Ghế Đã Bán</h3>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="GreenSquare bg-success"></div>
                                <h3 className="mt-2 ml-5">Ghế Bạn Đang Chọn</h3>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="GreySquare"></div>
                                <h3 className="mt-2 ml-5">Ghế Trống</h3>
                            </div>

                        </div>
                    </div>
                </div>
                <DanhSachGhe selectedProduct={this.state.selectedProduct} test={this.state.test} isBooking={this.state.isBooking} booked={this.state.listGheBooking} deleting={this.deletingGhe} booking={this.bookingGhe} selecting={this.state.selecting} dataGhe={dataGhe} />
            </div>
        );
    }
}

export default Home;