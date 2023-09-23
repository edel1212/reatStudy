import { Nav } from "./component/Nav";

import { useState } from "react";

const list = ["html", "css", "javscript"];

function App() {
  const [mode, setMode] = useState("WELCOME");

  return (
    <div className="App">
      <Nav list={list} modeChange={setMode} />
      {mode === "WELCOME" ? "OK" : "nono"}
    </div>
  );
}

export default App;
