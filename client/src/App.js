import Wrapper from "./components/wrapper/Wrapper";
import BrawlArena from "./components/brawlArena/BrawlArena";
import EggsNotChosen from "./components/eggsNotChosen/EggsNotChosen";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Wrapper />} />
        <Route exact path="/brawl" element={<BrawlArena />} />
        <Route exact path="/eggsNotChosen" element={<EggsNotChosen />} />
      </Routes>
    </div>
  );
}

export default App;
