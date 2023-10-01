import { useFullscreen } from "./functionalModule/UseFullScreen";

function App() {
  // 👉 전체화면 또는 전체화면 취소 시 사용 될 함수
  const fullScreenCallBack = (isFull) => {
    console.log(
      isFull ? "전체화면 시 사용될 기능 정의" : "전체화면이 아닐 시 기능 정의"
    );
  };

  const { element, triggerFull, exitFull } = useFullscreen(fullScreenCallBack);

  return (
    <div className="App">
      <div ref={element}>
        <p>
          <button onClick={triggerFull}>이미지 전체 화면</button>
          <button onClick={exitFull}>이미지 전체 종료</button>
        </p>
        <img src="https://source.unsplash.com/random/150×150"></img>
      </div>
    </div>
  );
}

export default App;
