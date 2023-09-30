import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", heandle);
    // 💬 ComponentWilUnMount 시 삭제
    return () => {
      document.removeEventListener("mouseleave", heandle);
    };
  }, []);

  // 💬 addEventListener에서 받아온 (e) : event임!
  const heandle = (e) => {
    console.log(e);
    onBefore();
  };
};
