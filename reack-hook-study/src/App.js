import { useState, useEffect, useRef } from "react";

import { useScroll } from "./functionalModule/UseScroll";

function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        스크롤 높이에 따라 색 변경
      </h1>
    </div>
  );
}

export default App;
