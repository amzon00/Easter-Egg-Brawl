import "./Wrapper.css";
import { useState, useEffect } from "react";
import ActualEgg from "../actualEgg/ActualEgg";
import Player from "../../createPlayer";
import players from "../../players";
import eggsData from "../../fetchData";

import StartBrawlBtn from "../startBrawlBtn/StartBrawlBtn";

function Wrapper() {
  let [playerNum, setPlayerNum] = useState(1);
  let [opacity, setOpacity] = useState("");
  const [data, setData] = useState({});

  let createPlayer = (e) => {
    // create new player and push it into the players pool
    e.preventDefault();
    let newPlayer = new Player(playerNum, e.target.id, e.target.src);
    setPlayerNum((playerNum = playerNum + 1));
    players.push(newPlayer);

    // set image opacity and disable on click
    let opacity = document.createAttribute("style");
    opacity.textContent = "opacity: 0.4; pointer-events: none";
    setOpacity(e.target.attributes.setNamedItem(opacity));
  };

  // hmtlCollection with the displayed eggs
  let eggsCount = document.getElementsByClassName("eggImage");

  // FETCHING DATA ------------------------------------------------------------------------------

  useEffect(() => {
    eggsData(setData);
  }, []);
  console.log(data);

  // ---------------------------------------------------------------------------------------------
  return (
    <div id="wrapper">
      <div
        style={
          players.length !== eggsCount.length || players.length === 0
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <h1>Player {playerNum} </h1>
        <h2> choose your egg!</h2>
      </div>
      <div
        style={
          players.length === eggsCount.length && eggsCount.length !== 0
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <h1>I am sorry... the basket is empty.</h1>
      </div>

      {/* The data is not coming on time. data.eggs is undefiend whenever .map() is being invoked. */}

      {Object.keys(data).length != 0 ? (
        data.eggs.map((egg, index) => {
          return (
            <ActualEgg
              key={index}
              id={egg.name}
              src={egg.image}
              createPlayer={createPlayer}
              alt="eggImage"
            />
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}

      <StartBrawlBtn />
    </div>
  );
}
export default Wrapper;
