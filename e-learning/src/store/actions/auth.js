import axios from 'axios';
import { createAction } from '.';
import { actionType } from './type';
export const signIn = (userLogin, callback) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: "POST",
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                data: userLogin,
            });
            // const res2 = await axios({
            //     method: "POST",
            //     url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            //     data: userLogin,
            // })
            dispatch(createAction(actionType.SET_ME, res.data));
            //! lưu lên local, là 1 mã định danh của BE
            localStorage.setItem("t", res.data.accessToken);
            //! qua App.js để lấy thông tin AccessToken
            //todo callback() là truyền function vào bên trông function khác,
            //todo như 1 tham số đầu vào
            callback();

        }

        catch (err) {
            //! bắt lỗi
            //buộc Shallow copy để log ra lỗi object
            const errorObject = { ...err }
            alert(err.response.data);
        }
    };
};

//! lOG OUT
//remove token
//1 remove token: localStoảge, store
// 2: chuyển trang qua trang login hoăc trang home

export const fetchMe = async (dispatch) => {
    try {
        const res = await axios({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
            method: "POST",
            // lấy info ko xài data mà xài headers
            headers: {
                //cái này là của BE quy định "Authorization"
                //! cú pháp syntax
                Authorization: "Bearer " + localStorage.getItem("t"),
            }
        })
        // console.log(res);
        //! có sẵn ở trên
        dispatch(createAction(actionType.SET_ME, res.data));
    }
    catch (err) {
        console.log(err);
    }
}