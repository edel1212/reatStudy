import { useState } from "react";

// 💬 외부에 선언 되어 있는 함수안에 useStat가 있음
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return { value, setValue };
};

function App() {
  // 💬 컴포넌트 내부 함수에서 외부 함수를 선언해서 반환 Object를 받음
  const name = useInput("yoo");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="name"
        // 👉 Object 형식으로 반환 하기 떄문에 아래와 같이 사용
        value={name.value}
        onChange={(e) => name.setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
