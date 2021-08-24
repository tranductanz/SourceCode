import React, { useState, Fragment } from "react";
import Game from "../Game";
//! check Validate
import { useFormik } from 'formik';
import * as yup from 'yup';
//! HOOK dispatch
import { useDispatch } from "react-redux";

//shape là hình dáng cái form như nào
//yup.object : value của cái form bắt buộc phải là object
const schema = yup.object().shape({
  //kiểu dữ liệu
  //username phải là chuỗi
  username: yup.string().required("** Username is Required ! "),
  email: yup.string().required("** Email is Required ! ").email("** Email is invalid, please try again"),
  // nhập 1 hoặc nhiều số ($) bắt buộc,
  phone: yup
    .string()
    .required("** Phone is Required !")
    .matches(/^[0-9]+$/g, "Phone must be number !")
})


//! DEBOUNCE
let timer = null;


const Home = () => {
  //! useState : tạo state
  // phần tử 1 : là 1 cái state
  // phần tử 2 : là 1 cái hàm
  //! useState : param 1 : là giá trị ban đầu của state
  const [isGameStarted, setIsGameStarted] = useState(false)

  const dispatch = useDispatch();


  // const [a, setA] = useState("");
  // const [b, setB] = useState(0);
  //! kiểu cũ
  // const [formValue, setFormValue] = useState({
  //   username: "",
  //   email: "",
  //   phone: "",
  // })
  //! xử lý form
  //todo values là data của form
  // const { handleChange, values } = useFormik({
  //   initialValues: {
  //     username: "",
  //     email: "",
  //     phone: "",
  //   }
  // })
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
    },
    //! check lỗi
    validationSchema: schema,
    //! đưa chuột vô mới check !!
    validateOnMount: true,
  })


  const handleSubmit = (event) => {
    event.preventDefault();

    //! Để cho khi submit đánh tất cả hiện lỗi lên luôn
    formik.setTouched({
      username: true,
      email: true,
      phone: true,
    })

    //! nếu mà toàn bộ cái form là true
    //! chỉ cần 1 cái false, thì form là false
    if (!formik.isValid) {
      return;
    }


    //! có sẵn, xem user có đụng vào không
    // console.log(formik.touched);
    // setIsGameStarted(true);

    //! dispatch action lên store, lưu info vào playerList

    dispatch({
      type: "ADD_PLAYER",
      payload: {
        ...formik.values,
        totalPoint: 25000,
        cards: [],
      },
    });
    setIsGameStarted(true);

    // console.log(formik.values);
    // console.log(formik.errors);
  };

  const handleSetDefaultPlayer = () => {
    const defaultPlayer = {
      username: "tranductan1",
      email: "tantran1610@gmail.com",
      phone: "099999999",
    }
    //! value đang nằm ở formik
    formik.setValues({
      username: defaultPlayer.username,
      email: defaultPlayer.email,
      phone: defaultPlayer.phone,
    });
  }

  //todo HÀM DEBOUNCE
  const handleChangeTest = () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      console.log("Test");
    }, 500)
  }


  return (
    <Fragment>
      {isGameStarted ? <Game /> : (
        <div
          className="text-center"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="diplay-4 mb-5"> Welcome to Pocker Center</h1>
          <h3>Fill your info and start</h3>
          <form
            onSubmit={handleSubmit}
            className="w-25 mx-auto">
            <input
              //state muốn cập nhật
              name="username"
              //! cho formik.touched biết user đã chạm vào đâu
              //todo hàm xây dựng sẵn
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="input"
              placeholder="username"
              className="w-100 form-control mb-3"
            />
            {/* //! check validate */}
            {formik.touched.username && <p className="text-danger">{formik.errors.username}</p>}
            <input
              //! cho formik.touched biết user đã chạm vào đâu
              //todo hàm xây dựng sẵn
              value={formik.values.email}
              onBlur={formik.handleBlur}
              name="email"
              onChange={formik.handleChange}
              type="input"
              placeholder="email"
              className="w-100 form-control mb-3"
            />
            {/* //! check validate */}
            {formik.touched.email && <p className="text-danger">{formik.errors.email}</p>}
            <input
              //! cho formik.touched biết user đã chạm vào đâu
              //todo hàm xây dựng sẵn
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              name="phone"
              onChange={formik.handleChange}
              type="input"
              placeholder="phone"
              className="w-100 form-control mb-3"
            />
            {/* //! check validate */}
            {formik.touched.phone && <p className="text-danger">{formik.errors.phone}</p>}
            <button
              className="btn btn-success">Start new Game</button>
            <button
              onClick={handleSetDefaultPlayer}
              type="button"
              className="btn btn-info">Set Default Player</button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
