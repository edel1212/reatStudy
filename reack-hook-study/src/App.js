import { useState, useEffect, useRef } from "react";

function App() {
  const blackGom = useRef();

  // 👉 input을 포커싱함! document.getElementById 와 비슷함
  // blackGom.current  input이 잡힘
  setTimeout(() => {
    debugger;
    blackGom.current.focus();
  }, 2000);

  return (
    <div className="App">
      {/* React에서 만들어지는 요소들은 무조건 ref[Reference]를 갖고있다 */}
      <input ref={blackGom} placeholder="name" />
    </div>
  );
}

export default App;
