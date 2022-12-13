import "./App.css";
import "bulma/css/bulma.min.css";
import { Routes, Route } from "react-router-dom";
import Lobby from "./components/Lobby";
import CodeBlock from "./components/pages/CodeBlock";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/codeBlocks/:codeBlockId" element={<CodeBlock />} />
      </Routes>
    </div>
  );
}

export default App;
