import { useState } from "react";

/**
 * 선택된 인덱스 번호 맞느 전달받은 JSON의 배열의 Index를 반환
 *
 * @param initialTabIndex : index 번호
 * @param sectionList : 기반이 될 JSON Data
 *
 * @return {
 *  currentItem , // 입력받은 index의 데이터
 *  changeItem    //  useState()의 값 변경 함수
 * }
 */
export const useTabs = (initialTabIndex, sectionList) => {
  const [currentIndx, setCurrentIndex] = useState(initialTabIndex);
  // 👉 Validation Check
  if (!sectionList || !Array.isArray(sectionList)) return;
  return {
    currentItem: sectionList[currentIndx],
    changeItem: setCurrentIndex,
  };
};
