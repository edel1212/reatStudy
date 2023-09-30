import { useState, useEffect, useRef } from "react";

/**
 *  ⭐️ Hook의 이름은 use... 로 시작해주지 check로 했다 에러 발생 ..
 *     - error :  React Hook function. React component names must start with an uppercase letter.
 *                React Hook names must start with the word "use"
 */
const useCheck = () => {
  const element = useRef();
  if (element.current) {
    console.log(element); // 하나로 다 사용할 경우 h3
  }
  return element;
};

function App() {
  // ⭐️ 하나로 하면 ref는 마지막 h3만 인식함!! 제대로 사용하라면 변수를 추가해주자!
  const refFun = useCheck();
  const refFunH3 = useCheck();
  return (
    <div className="App">
      <p ref={refFun}>I'm P tag</p>
      <h3 ref={refFunH3}>I'm H3 tag</h3>
    </div>
  );
}

export default App;
