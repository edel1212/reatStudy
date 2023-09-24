//import { useState, useEffect } from "react";
import { useTitle } from "./useEffectModule/UseTitle";

function App() {
  // 👉 모듈화한 함수 실행
  const titleUpdate = useTitle("Loading....");
  // 👉 5초 후 title 값을 변경해서 useEffect()가 재 랜더링 되게 끔 설정
  setTimeout(() => {
    titleUpdate("useEffect사용! title 변경 시 감지 랜더링");
  }, 5_000);
  return <div className="App"></div>;
}

export default App;
