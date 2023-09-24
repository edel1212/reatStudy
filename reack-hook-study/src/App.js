import { useInput } from "./useInput/UseInput";

function App() {
  // 👉 10이 넘으면 작동하지 않게 끔 조건 함수를 변수로 만듬
  const maxLen = (val) => val.length <= 10;
  // const includeWordChck = (val) => !val.includes("@");
  const name = useInput("yoo", maxLen);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="name"
        /**  💬 useInput()함수 자체에서 반환 할 때 이름을 맞춰줬기 떄문에 아래와같이 사용이 가능함 */
        {...name}
      />
    </div>
  );
}

export default App;
