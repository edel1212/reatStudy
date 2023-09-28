import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const element = useRef();

  /**
   * 실행 순서 -  숫자 증가 예시의 경우 순서
   * - 0. 숫자 증가 버튼 클릭 시
   * - 1. 일단 useEffect()의 실행 함수가 실행
   * - 2. 이벤트 발생 시 clean-up 함수 실행
   * - 3. 실행 함수 실행
   */
  useEffect(() => {
    // 👉 ComponentDidMount, ComponentDidUpdate 시 사용됨
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////

    // 👉 ComponentWilUnMount 될 경우 사용 된다.
    /***
     * 사용 이유
     * - component가 mount되지 않았을 때 eventListenter가 배치되게 하고 싶지 않기 떄문임
     * - clean-up 함수라고도 한다!
     * - clean-up func는 대상 state가 사라질 때 (unmount)될 때 실행이 되는 것을 알 수 있습니다.
     */
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};
