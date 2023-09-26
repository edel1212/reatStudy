import { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  if (element.current) {
    element.current.addEventListener("click", onClick);
  }
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
