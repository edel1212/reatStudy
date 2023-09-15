// 만든 버튼을 Import
import Button from "./Button";

import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const clickEvent = () => {
    console.log("call api!!!");
    console.log("I run all Time!!!");
    setCount((current) => current + 1);
  };

  // 👉 한번만 실행 됨!
  // 나중에 코드가 안 꼬일려면 , useEffect 내에 코드가 실행되는 시점이 컴포넌트의 렌더링 이후 dlek.
  // 컴포넌트 함수 내에 있는 일반적인 다른 코드들보다도 use effect가 늦게 실행됨!!
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(() => {
    console.log("Call API");
  }, []);

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
