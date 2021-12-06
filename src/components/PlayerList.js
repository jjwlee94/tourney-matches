import React from "react"; //optional
import Player from "./Player";

function PlayerList(props) {
  let players = props.playerData.map((object) => {
    let player = (
      <Player
        key={object.gamerTag}
        gamerTag={object.gamerTag}
        firstName={object.firstName}
        lastName={object.lastName}
        wins={object.wins}
      />
    );
    return player;
  });

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

export default PlayerList;
