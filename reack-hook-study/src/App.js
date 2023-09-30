import { useState, useEffect, useRef } from "react";

import { usePreventLeave } from "./functionalModule/usePreventLeave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>종료 시 알림창</button>
      <button onClick={disablePrevent}>종료 시 알림창 제거</button>
    </div>
  );
}

export default App;
