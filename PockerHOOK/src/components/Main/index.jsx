import React from "react";

import Player from "../Player";

//! lấy dữ liệu từ store xuống để dùng
import { useSelector } from "react-redux";


const MainComponent = () => {
  //! lấy dữ liệu từ store xuống để dùng
  //state là đại diện cho toàn bộ dữ liệu trên store
  const players = useSelector((state) => {
    return state.player.playerList;
  })

  return (
    <div
      style={{ position: "relative", height: "600px" }}
      className="container"
    >
      {/* <button onClick={handleChangeState}>Change State</button> */}
      {/* //! Map ra danh sách */}
      {/* //! props index dùng để canh CSS cho 4 player nằm 4 chỗ */}
      {players.map((item, index) => {
        return <Player key={item.username} player={item} index={index + 1} />
      })}

      <img
        alt="main"
        style={{
          position: "absolute",
          width: "100px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        src="https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png"
      />
    </div>
  );
};

export default MainComponent;
