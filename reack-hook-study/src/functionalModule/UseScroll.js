import { useState, useEffect } from "react";

export const useScroll = () => {
  // 👉 useState() 생성
  const [state, setState] = useState({ x: 0, y: 0 });

  // 👉 scroll 이벤트 시 실행 될 함수 - useSate()값 변경
  const onsScroll = () => setState({ x: window.scrollX, y: window.scrollY });

  useEffect(() => {
    window.addEventListener("scroll", onsScroll);
    return () => window.removeEventListener("scroll", onsScroll);
  }, []);

  return state;
};
