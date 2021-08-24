import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import { Container, TextField, Button } from '@material-ui/core'
import styles from './styles.js';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDT: "",
                //? set cứng, vì 1 cái chỉ nhận 1 mã nhóm
                maNhom: "GP01",
            }
        }
    }

    handleChange = (event) => {
        //! sự kiện vừa rồi diễn ra đối tượng nào
        //! target là thẻ, đối tượng HTML
        // console.log(event.target.value);
        // todo Cách lấy giá trị input
        // console.log(event.target.name);
        this.setState({
            formValue: {
                ...this.state.formValue,
                //! [code] là dynamic key
                //! input thay đổi gì thì truyền cái đấy
                [event.target.name]: event.target.value,
            }
        })
    }


    handleSubmit = async (event) => {
        //! hàm chặn mặc định, khi bấm lên không reload lại PAGE
        //! bắt buộc phải có dòng này để khi nhấn không reload lại trang
        event.preventDefault();
        // console.log(this.state.formValue);
        //todo không cần lấy dữ liệu và lưu trữ trên store, nên không cần middleware
        //todo có thể call api trực tiếp
        try {
            const res = await axios({
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                method: "POST",

                data: this.state.formValue,
            })
            // console.log(res);
            console.log(this.props.history);
            this.props.history.push("/signin");
        }

        catch (err) {
            console.log(err);
        }
    }


    render() {
        const { formInput } = this.props.classes
        return (
            <Fragment>
                <Header />
                <Container maxWidth="sm">
                    <h1>Đăng Ký</h1>
                    {/* //! đây là sự kiện diễn ra khi USER "ENTER" hoặc nhấn vào BUTTON */}
                    <form onSubmit={this.handleSubmit}>
                        <div className={formInput}>
                            <TextField
                                //set value để đưa giá trị của state hiện lên trên input
                                //! chính là cái state muốn chỉnh sửa riêng
                                name="taiKhoan"
                                onChange={this.handleChange}
                                fullWidth
                                label="Tài khoản"
                                variant="outlined"
                            />
                        </div>
                        <div className={formInput}>
                            <TextField
                                type="password"
                                name="matKhau"
                                onChange={this.handleChange}
                                fullWidth label="Mật khẩu"
                                variant="outlined" />
                        </div>
                        <div className={formInput}>
                            <TextField
                                name="hoTen"
                                onChange={this.handleChange}
                                fullWidth label="Họ Tên"
                                variant="outlined" />
                        </div>
                        <div className={formInput}>
                            <TextField
                                name="email"
                                onChange={this.handleChange}
                                fullWidth label="Email"
                                variant="outlined" />
                        </div>
                        <div className={formInput}>
                            <TextField
                                name="soDT"
                                onChange={this.handleChange}
                                fullWidth label="Số ĐT"
                                variant="outlined" />
                        </div>
                        <div>
                            {/* //bình thường button có type button
                            //nhưng khi ở from thì là submit */}
                            {/* //! nếu muốn nhấn để gởi cái gì đó, thì không dùng onClick */}
                            <Button type="submit" variant="contained" color="primary">
                                Đăng Ký
                            </Button>
                        </div>
                    </form>
                </Container>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Signup);