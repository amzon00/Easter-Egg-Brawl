import EggsNotChosen from "../eggsNotChosen/EggsNotChosen";
import players from "../../players.js";
import ActualEgg from "../actualEgg/ActualEgg";
import GoBackBtn from "../goBackBtn/GoBackBtn";

function BrawlArena() {
  const randomWinner = Math.floor(Math.random() * players.length);
  const winner = players[randomWinner];
  console.log(winner);

  if (players.length !== 0) {
    return (
      <div>
        <h1>Fighting...</h1>
        {players.map((egg, index) => (
          <ActualEgg
            src={egg.avatar}
            className={egg.className}
            id={egg.playerId}
            key={index}
          />
        ))}
        <h1>Winner: Player {winner.playerId}</h1>
        <ActualEgg
          src={winner.avatar}
          className={winner.className}
          id={winner.id}
        />
        <GoBackBtn />
      </div>
    );
  } else {
    return <EggsNotChosen />;
  }
}

export default BrawlArena;
