import { useState, useEffect, useRef } from "react";

import { useFadeIn } from "./functionalModule/UseFadeIn";

function App() {
  /**
   * ⭐ 여기서 중요한건 ref()는 하나만 참조가 가능하기에
   *    각각 하나씩 반환 함수를 만들어서 적용해 줬다는 것이다.
   */
  const fadeInH1 = useFadeIn(3);
  const fadeInP = useFadeIn(5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello~</h1>
      <p {...fadeInP}>이런식으로 만들어서 사용이 가능하다</p>
    </div>
  );
}

export default App;
