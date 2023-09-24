import { useTabs } from "./useStateModule/UseTab";

const section = [
  {
    tab: "Section1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section2",
    content: "I'm the content of the Section 2",
  },
];

function App() {
  // 👉 import한 함수를 사용
  const { currentItem, changeItem } = useTabs(0, section);
  return (
    <div className="App">
      {section.map((item, idx) => (
        <button
          key={idx}
          // 👉 onClick 사용 시 앵간하면 겉에 Click 함수를 감싸주자 loop error!!!
          onClick={() => {
            changeItem(idx);
          }}
        >
          {item.tab}
        </button>
      ))}
      {/** 👉 반환 받은 currentItem 데이터의  content값을 보여줌 */}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
