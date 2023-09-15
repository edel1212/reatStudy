// 만든 버튼을 Import
import Button from "./Button";

import styles from "./App.module.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const clickEvent = () => {
    console.log("call api!!!");
    setCount((current) => current + 1);
  };
  return (
    <div>
      {count}
      <h1 className={styles.title}>Yeeeee~</h1>
      <Button text="hi!sss22" />
      <button onClick={clickEvent}>count</button>
    </div>
  );
}

export default App;
