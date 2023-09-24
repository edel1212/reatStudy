import { useState } from "react";
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = false;

    // 👉 받아온 파라미터가 함수일 경우에만 실행
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    } // if - 정상일 경우에만 useSate() Update!
  };
  return { value, onChange };
};
