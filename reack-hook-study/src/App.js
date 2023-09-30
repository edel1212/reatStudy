import { useState, useEffect, useRef } from "react";

import { useBeforeLeave } from "./functionalModule/UseBeforeLeave";

function App() {
  // 👉 사용될 Function 생성
  const beforeEvent = () => console.log("leaving...");
  // ✅ 파라미터로 전달
  useBeforeLeave(beforeEvent);
  return <div className="App"></div>;
}

export default App;
