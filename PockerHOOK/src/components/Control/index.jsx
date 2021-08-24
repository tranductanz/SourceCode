import React, { useCallback } from "react";
//! lấy dữ liệu từ store
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
const Control = () => {
  const players = useSelector((state) => {
    return state.player.playerList;
  })

  const deckCard = useSelector((state) => {
    return state.card.deckCard;
  })
  const dispatch = useDispatch();
  const handleDrawCards = useCallback(async () => {
    //! cần lên store lấy Id của bộ bài
    //count = 12 vì có 4 người chơi  /3 
    try {
      const res = await axios({
        method: "GET",
        url: `https://deckofcardsapi.com/api/deck/${deckCard.deck_id}/draw/?count=12`,
      })

      //b1) chia bài cho 4 player
      const clonePlayers = [...players];

      for (let index in res.data.cards) {
        //! nếu i = 0, 0 % 4 = 0 dư 0
        //! playerIndex = 0
        //! nếu i = 1, 1 % 4 = 0 dư 1
        //! playerIndex = 1
        //! nếu i = 2, 2 % 4 = 0 dư 2
        //! playerIndex = 2
        //! ....
        //! nếu i = 4, 4 % 4 = 1 dư 0
        //! playerIndex = 0
        const playerIndex = index % clonePlayers.length;
        //todo mỗi player đều có mảng cards
        clonePlayers[playerIndex].cards.push(res.data.cards[index]);
      }
      //b2) dispatch action gửi nguyên playerList mới lên store đê cập nhật
      // console.log(clonePlayers);
      dispatch({
        type: "SET_PLAYER",
        payload: clonePlayers,
      })
    }

    catch (err) {
      console.log(err);
    }
  }, [deckCard.deck_id, dispatch, players])


  return (
    <div className="d-flex  justify-content-end container">
      <div className="border d-flex justify-content-center align-items-center px-2">
        <button className="btn btn-success mr-2">Shuffle</button>
        <button onClick={handleDrawCards} className="btn btn-info mr-2">Draw</button>
        <button className="btn btn-primary mr-2">Reveal</button>
      </div>
      <div className="d-flex">
        {/* //! render danh sách bảng điểm của player */}
        {players.map((item) => {
          return (
            <div key={item.username} className="border px-3 text-center">
              <p>{item.username}</p>
              <p>{item.totalPoint}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Control;
