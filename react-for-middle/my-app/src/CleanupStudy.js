import { useState, useEffect } from "react";

// 👉 보이고 안보이고 대상이 될 컴포넌트
function Hello() {
  useEffect(() => {
    console.log("useEffect이지만 지웠다 다시 만들어서 show시 로그가 찍힘");
    // 해당 컴포넌트가 제거 될 경우 아래의 함수가 실행된다.
    return () => console.log("해당 컴포넌트가 없어질 떄 실행된다.");
  }, []);

  return (
    <div>
      <h1>Hi~~</h1>
    </div>
  );
}

function CleanUp() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);
  return (
    <div>
      {/** Javascipt를 사용하라면 "{}"안에 사용해야한다! */}
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default CleanUp;
