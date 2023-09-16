// 만든 버튼을 Import
import Button from "./Button";
import Div from "./EffectStudy";

import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Call API");
  }, []);

  return (
    <div>
      <Button styles={styles.btn} text="hi!sss22" />
      <Div />
    </div>
  );
}

export default App;
