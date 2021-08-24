import React, { Fragment, useEffect, useState, memo, useCallback } from "react";
import "./index.css";
import Controls from "../../components/Control";
import Main from "../../components/Main";
import axios from 'axios';
import { useDispatch } from "react-redux";
//! useEffect là thay thế cho lifeCycle

const Game = () => {

  //test useEffect
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  //! dispatch lên store
  const dispatch = useDispatch();
  //Didmount, didupdate, willUnmount
  //mảng đằng sau là mảng depencence (phụ thuộc) là rỗng
  //nếu giá trị trong depencence có thay đổi thì mới re-render lại
  // ở đây là rỗng
  // useEffect(() => {
  //   console.log("use effect running");
  // }, [])

  const fetchDeckCards = useCallback(async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://deckofcardsapi.com/api/deck/new/",
      });
      //lụm 1 bộ bài mới, lưu ID của nó trên localStorage
      //nếu đã có bài, lụm lên xóc bài
      //chưa có thì lụm bài mới
      localStorage.setItem("deck_id", res.data.deck_id);
      dispatch({
        type: "SET_DECK_CARD",
        payload: res.data,
      })
    }
    catch (err) {
      console.log(err);
    }
  }, [dispatch])

  //! xóc bài
  //! muốn xáo bộ bài nào, truyền id bộ đó vào đây
  const reShuffleCard = useCallback(async (id) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://deckofcardsapi.com/api/deck/${id}/shuffle/`,
      });
      dispatch({
        type: "SET_DECK_CARD",
        payload: res.data,
      })
    }
    catch (err) {
      console.log(err);
    }
  })

  //todo useCallBack sẽ quản lý vấn đề khi nào printCount cần tạo mới lại
  //todo khi nào không cần tạo mới khi component Game update, dùng để optimized
  // trước khi tạo mới printCount nếu giá trị [] thay đổi
  // thì mới tạo mới hàm printCount
  const printCount = useCallback(() => {
    console.log(count);
  }, [count])

  //! call api
  // kiểm tra nếu đã có bộ bài rồi,sẽ không tạo mới nữa
  //chỉ shuffle bộ bài hiện tại
  useEffect(() => {
    //call api
    const deckId = localStorage.getItem("deck_id");
    if (deckId) {
      reShuffleCard(deckId);
    }
    else {
      fetchDeckCards();
    }
  }, [fetchDeckCards, reShuffleCard]);


  //! function Component không có lifeCycle
  //! cần didMount để call api fetch Card
  return (
    <Fragment>
      {/* //todo khi nhấn nút sẽ biến count lên 1 */}
      <button onClick={() => { setCount(count + 1) }} className="btn btn-danger">
        Set count
      </button>
      <button onClick={() => { setCount2(count2 + 1) }} className="btn btn-danger">
        Set count 2
      </button>
      <Controls />
      <Main />
    </Fragment>
  )
}


//! memo có nghĩa là shouldComponentUpdate
//! có thể check component Game khi nào thật sự cần render thì render lại
export default memo(Game);


