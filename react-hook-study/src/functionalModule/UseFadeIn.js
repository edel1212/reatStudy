import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1) => {
  // 💬 React의 Ref를 가져옴
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      // 👉 사용에 편의를 위해 Object를 단축해서 변수로 만듬
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);
  // 💬 Object형태로 key값을 맞춰서 반환하여 사용 하는 쪽에서 {...반환}을 사용하여 쉽게 사용
  return { ref: element, style: { opacity: 0 } };
};
