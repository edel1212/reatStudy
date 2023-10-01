import { useState, useEffect } from "react";

/**
 * 온라인 오프라인 상태를 확인하는 Hook
 *
 * @param onChange 상태가 변경될 때 실행 될 함수
 *
 * @return 현재 네트워크 연결 상태 - useState() 사용
 */
export const useNetwork = (onChange) => {
  // 👉 "navigator.onLine" javascript내장 Object이며 boolean을 반환함
  const [status, setStatus] = useState(navigator.onLine);

  // 👉 window 이벤트 시 실행 될 함수
  const handleChange = () => {
    // 💬 파라미터로 받은 함수
    onChange(navigator.onLine);
    // 💬 React useState() 변경
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
