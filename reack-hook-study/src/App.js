import { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    // 👉 ComponentDidMount, ComponentDidUpdate 시 사용됨
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////

    // 👉 ComponentWilUnMount 될 경우 사용 된다.
    /***
     * 사용 이유
     * - component가 mount되지 않았을 때 eventListenter가 배치되게 하고 싶지 않기 떄문임
     */
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

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
