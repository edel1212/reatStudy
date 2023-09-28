import { useState, useEffect, useRef } from "react";

import { useClick } from "./useEffectModule/UseClick";

function App() {
  const sayHello = () => console.log("say Hello~");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}

export default App;
