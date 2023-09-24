import { useState, useEffect } from "react";

/**
 * 받아온 데이터를 기반으로 useEffect()를 사용하여 값 변경
 * - 감시 대상으로 title 를 지정
 * - 랜더링 시 한번 실행된 후 감시 대상의 값이 변경 되어야 재 실행 및 랜더링
 *
 * @param initialTitle  - 타이틀에 사용될 문구
 *
 * @return setTitle - useState()의 값 변경 함수
 */
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    // 👉  해당 title은 정말 HTML에서의 최 상단 title 이다!!
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  // 👉 useEffect() 사용
  useEffect(updateTitle, [title]);

  // 💬 값을 바꾸는 setTitle를 반환함
  return setTitle;
};
