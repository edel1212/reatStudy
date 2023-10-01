import { useRef } from "react";

/**
 * 전체화면 기능 함수
 *
 * @param callback - 전체화면 또는 전체화면 취소 시 사용될 함수
 *
 * @return  element     - ref()대상
 * @return  triggerFull - 전체화면 함수
 * @return  exitFull    - 전체화면 취소 함수
 *
 */
export const useFullscreen = (callback) => {
  const element = useRef();

  // 👉  전체화면 or  취소 시 사용 될 함수
  const callbackFun = (isFull) => {
    callback(isFull);
  };

  // 👉 전체화면 함수
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      callbackFun(true);
    }
  };
  // 전체화면 취소 함수
  const exitFull = () => {
    document.exitFullscreen();
    callbackFun(false);
  };
  return { element, triggerFull, exitFull };
};
