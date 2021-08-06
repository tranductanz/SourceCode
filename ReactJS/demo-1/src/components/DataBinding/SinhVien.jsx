import React, { Component } from 'react';

export default class SinhVien extends Component {
    //thuộc tính đối tượng ko cần khai báo
    hoTen = "Nguyễn Văn A";
    lop = "FrontEnd xxx";
    tenTrungTam = "CyberSoft";

    renderThongTinSinhVien = () => {
        return (
            <ul>
                <li>Họ tên: {this.hoTen}</li>
                <li>Lớp: {this.lop}</li>
                <li>Trung tâm: {this.tenTrungTam}</li>
            </ul>
        )
    }

    render() {
        return (
            <div className="container">
                {this.renderThongTinSinhVien()}
            </div>
        );
    }
}

