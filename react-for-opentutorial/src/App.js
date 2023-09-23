import { Nav } from "./component/Nav";
import { Create } from "./component/Create";

import { useState } from "react";

const list = ["html", "css", "javscript"];

function App() {
  const [mode, setMode] = useState("WELCOME");

  const [listItme, setListItem] = useState(list);

  return (
    <div className="App">
      <Nav list={listItme} modeChange={setMode} />
      {mode === "WELCOME" ? "OK" : "nono"}
      <Create setListItem={setListItem}></Create>
    </div>
  );
}

export default App;
