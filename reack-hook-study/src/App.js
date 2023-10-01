import { useState, useEffect, useRef } from "react";

import { useNetwork } from "./functionalModule/UseNetwork";

function App() {
  const handleNetrowkChange = (status) =>
    console.log(status ? "온라인 상태!!!" : "오프라인 상태!!");

  const onLine = useNetwork(handleNetrowkChange);
  return (
    <div className="App">
      <h2>{onLine ? "온라인 상태입니다." : "오프라인 상태입니다."}</h2>
    </div>
  );
}

export default App;
