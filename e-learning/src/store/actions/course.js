//! đây là nơi dùng chứa những action liên quan tới
//! COURSE
// tạo ra 1 async action để fetch course ds khoá học
import axios from 'axios';
import { createAction } from '.';
import { actionType } from './type';
export const fetchCourses = async (dispatch) => {
    //!side-effect: những hành động thay đổi 1 state nằm ngoài scope của function
    //dưới đây là 1 side-effect
    //todo CÀI MIDDLE-WARE TÊN LÀ npm i redux-thunk
    try {
        const res = await axios({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
            method: "GET",
            params: {
                MaNhom: "GP01",
            },
        });
        //thay đổi dữ liệu trên store nằm ngoài function
        //! đặt tên theo hàm đã quy định sẵn
        dispatch(createAction(actionType.SET_COURSES, res.data));
    }
    catch (err) {
        console.log(err);
    }
}

//! sử dụng kỹ thuật CLOSURE
export const fetchCourse = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc",
                method: "GET",
                params: {
                    maKhoaHoc: id,
                },
            });

            dispatch(createAction(actionType.GET_INFO, res.data));
            //1. dispatch action lên store để lưu detail
            // (tạo dữ liệu courseDetail trên reducer, createAction, actionType)
            //2. ở component Detail, lấy dữ liệu xuống và show ra màn hình ( hình ảnh,
            //tên khoá, mô tả, người tạo);
        }
        catch (err) {
            console.log(err);
        }
    }
}