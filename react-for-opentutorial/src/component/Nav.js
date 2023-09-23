export const Nav = ({ list, modeChange }) => {
  const liClick = (index, e) => {
    console.log("클릭 이벤트도 받을 수 있음!!", e);
    let mod = "WELCOME";
    if (index === 0) {
      mod = "WELCOME";
    } else if (index === 1) {
      mod = "BACK";
    }
    modeChange(mod);
  };

  return (
    <div>
      <ul>
        {list.map((itme, idx) => (
          // 이렇게 ()=>{만든 이벤트}를 넣어줘야 에러도 없고 해당 타겟 찾기도 쉬움!!
          <li onClick={(e) => liClick(idx, e)} key={idx}>
            {itme}
          </li>
        ))}
      </ul>
    </div>
  );
};
