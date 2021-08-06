import React, { Component } from 'react';

class Databinding extends Component {
    fullName = "Trần Đức Tân";
    email = "tantran1610@gmail.com";


    //câu điều kiện
    //! state là 1 thuộc tính có sẵn bên trong components
    state = {
        isLoggedin: false,
    };



    renderMessage = () => {
        alert("Hello Message");
    }


    //Khái niệm Closure : tập hợp 1 function và môi trường khởi tạo function đó
    // truyền tham số vào 1 function onclick

    showMessageWithParams = (message) => {
        return () => {
            alert(message);
        }
    }

    showMessageWithThis = () => {
        alert(`Hello, ${this.fullName}`);
    }


    //function check điều kiện
    renderHeader = () => {
        if (this.state.isLoggedin) {
            return <a className="text-white">Hello, Tân</a>
        }
        return (
            //! thẻ rỗng để bọc giao diện
            <>
                <a className="mx-4 text-white">Sign in</a>
                <a className="mx-4 text-white">Sign up</a>
            </>
        );
    }

    handleLogin = () => {
        //! hàm setState là 1 hàm có sẵn trong react JS
        this.setState({
            isLoggedin: true,
        });
    }

    handleLogout = () => {
        this.setState({
            isLoggedin: false,
        });
    }

    render() {
        return (
            <div className="text-center">
                <h1>----Databinding----</h1>
                <h3>Full Name : {this.fullName}</h3>
                <h3>Email : {this.email}</h3>
                <h3>Age : {2021 - 1996}</h3>


                <h1>----Event Binding----</h1>
                <button onClick={this.renderMessage}>Show Message</button>
                <button onClick={this.showMessageWithParams("Hello World")}>Show message with params</button>
                <button onMouseEnter={this.showMessageWithThis}>Show Message with This On Mouse</button>
                <h1>-----Làm việc với câu lệnh điều kiện-----</h1>
                <h5>Dùng điều kiện để ẩn hiện thành phần trên giao diện</h5>

                <div className="bg-dark p-3">
                    {this.renderHeader()}
                </div>


                <div className="py-3">
                    {this.state.isLoggedin ? (<button onClick={this.handleLogout}>Đăng Xuất</button>) : (<button onClick={this.handleLogin} className="mr-3">Đăng nhập ngay</button>)}
                </div>
            </div>
        );
    }
}



export default Databinding;
