import { Link } from "react-router-dom";
import { useState } from "react";
import players from "../../players";
function GoBackBtn() {
  let clearPlayers = () => {
    // it throws an error whenever players array is being emptied.
    // players = [];
    console.log(players);
  };
  return (
    <div>
      <Link to="/">
        <button onClick={clearPlayers}>
          <h1>back</h1>
        </button>
      </Link>
    </div>
  );
}

export default GoBackBtn;
