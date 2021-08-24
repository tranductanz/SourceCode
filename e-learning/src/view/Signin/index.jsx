import React, { Component } from 'react';
import Header from '../../components/Header';
import { Container, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/auth';
class Signin extends Component {
    //1. Xử lý form
    //2. Call api đăng nhập ( tạo async action)
    //. tạo file store/actions/auth.js
    //3. tạo reducer mới để chứa dữ liệu store/reducers/me.js tạo một dữ liệu lưu mới profile
    //4. Sau khi lấy được data từ BE, dispatch action lên store vào me
    //dùng action Creator, tách file

    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                taiKhoan: "",
                matKhau: "",
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            formValue: {
                ...this.state.formValue,
                [event.target.name]: event.target.value,
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(
            //todo sau khi đăng nhập thành công thì gọi 1 cái call back cho chuyển trang
            signIn(this.state.formValue, () => {
                //! Đã set route mới có History và Match
                // truyền vào patch sau khi đăng nhập
                // chuyển trang bằng code ( PROGRAMMING NAVIGATION)
                //! vì đã thay đổi cách viết HOC
                //! muốn không báo lỗi phải tự truyền props history này vô
                this.props.history.push('/');
            }));
        //todo khi viết props render HOC thì phải tự truyền props vào
    };

    //! đây giống như chức năng EDIT USER
    handleSetDefaultLogin = () => {
        const userLogin = {
            taiKhoan: "tranductanz1234",
            matKhau: "12345678",
        };

        this.setState({
            formValue: {
                taiKhoan: userLogin.taiKhoan,
                matKhau: userLogin.matKhau,
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
                    <Container maxWidth="sm">
                        <form onSubmit={this.handleSubmit}>
                            <div style={{ marginBottom: 30 }}>
                                <TextField
                                    //giá trị input
                                    value={this.state.formValue.taiKhoan}
                                    name="taiKhoan"
                                    onChange={this.handleChange}
                                    fullWidth label="Tài khoản"
                                    variant="outlined" />
                            </div>
                            <div style={{ marginBottom: 30 }}>
                                <TextField
                                    //giá trị input
                                    value={this.state.formValue.matKhau}
                                    type="password"
                                    name="matKhau"
                                    onChange={this.handleChange}
                                    fullWidth label="Mật khẩu"
                                    variant="outlined" />
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary">
                                    Đăng Nhập
                                </Button>
                                <Button

                                    onClick={this.handleSetDefaultLogin}
                                    // muốn bấm thì phải để type là button
                                    //! vì nó sẽ ăn luôn onclick của thẻ FORM
                                    // type="submit"
                                    type="button"
                                    variant="contained"
                                    color="secondary">
                                    Set người dùng mặc định
                                </Button>
                            </div>
                        </form>
                    </Container>
                </div>
            </div>
        );
    }
}

export default connect()(Signin);