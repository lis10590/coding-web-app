import "./App.css";
import "bulma/css/bulma.min.css";
import { Routes, Route } from "react-router-dom";
import Lobby from "./components/Lobby";
import GoodPairs from "./components/pages/GoodPairs";
import MaxWords from "./components/pages/MaxWords";
import SortPeople from "./components/pages/SortPeople";
import Palindrome from "./components/pages/Palindrome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/goodpairs" element={<GoodPairs />} />
        <Route path="/maxwords" element={<MaxWords />} />
        <Route path="/sortpeople" element={<SortPeople />} />
        <Route path="/palindrome" element={<Palindrome />} />
      </Routes>
    </div>
  );
}

export default App;
