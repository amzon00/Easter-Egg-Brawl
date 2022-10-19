import "./StartBrawlBtn.css";
import { Link } from "react-router-dom";
import players from "../../players";

function StartBrawlBtn() {
  return (
    <div>
      <Link to={players.length !== 0 ? "/brawl" : "/eggsNotChosen"}>
        <button>Start Brawl</button>
      </Link>
    </div>
  );
}

export default StartBrawlBtn;
