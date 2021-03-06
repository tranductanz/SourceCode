import React from "react";
import Card from "../Card";

const Player = (props) => {
  return (
    //! dùng để canh CSS cho 4 player nằm 4 chỗ
    <div className={`player-${props.index}`}>
      <p className="lead">{props.player.username}</p>
      <main className="d-flex">
        {props.player.cards.map((item) => {
          return <Card key={item.code} card={item} />
        })}
      </main>
    </div>
  );
};

export default Player;
