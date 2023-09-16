import { useState, useEffect } from "react";

function Div({ text }) {
  // useEffect 한번만 실행
  useEffect(() => {
    console.log("한번만 실행");
  }, []); // 💬 "[]"가 없으면 렌더링 시 계속 실행 된다.

  // count
  const [count, setCount] = useState(0);
  const clickEvent = () => setCount((current) => current + 1);
  useEffect(() => {
    console.log("카운트가 변경 될 때만 실행 됨!", count);
  }, [count]);

  // keywork
  const [keyword, setKeywork] = useState("");
  const onChange = (e) => setKeywork((currnet) => (currnet = e.target.value));
  useEffect(() => {
    if (!keyword) return; // 💬 조건문을 넣어서 사용 가능
    console.log("키워드가 변경 될 때만 실행 됨!", keyword);
  }, [keyword]);

  // 키워드 카운터 둘다 변경 될때만 실행
  useEffect(() => {
    console.log("키보드 카운터 둘중 하나라도 변경되면 실행");
  }, [keyword, count]);

  return (
    <div>
      <hr />
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <button onClick={clickEvent}>count</button>
    </div>
  );
}

// Export 시켜줌
export default Div;
