import React from "react"; //optional
import Match from "./Match";

function MatchList(props) {
  let matches = props.matchData.map((object) => {
    let match = (
      <Match
        key={object.matchNumber}
        players={object.players}
        winner={object.winner}
        scoreDifference={object.scoreDifference}
      />
    );
    return match;
  });

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
}

export default MatchList;
