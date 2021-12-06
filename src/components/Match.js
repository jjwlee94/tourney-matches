import React from "react"; //optional

function Match(props) {
  return (
    <article className="Match">
      <h1>
        {props.players[0]} <span>vs</span> {props.players[1]}
      </h1>
      {props.winner && (
        <h2>
          {props.winner} is the winner by {props.scoreDifference}!
        </h2>
      )}
      {!props.winner && <h2>No winners yet!</h2>}
    </article>
  );
}

// Could be written with a ternary operator
// {winner ? <h2>{winner} is the winner by {scoreDifference}!</h2> : <h2>No winners yet!</h2>}

export default Match;
