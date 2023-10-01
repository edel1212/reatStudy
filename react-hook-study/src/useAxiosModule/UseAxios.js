import defaultAxios from "axios";
import { useEffect } from "react";
import { useState } from "react";

/**
 * 비동기 통신
 *
 * @param options axios에 사용 될 옵션 값
 * @param axiosInstnafce axios인스턴스
 *
 * @return state 통신 결과 값
 * @return refetch 비동기 통신 다시 요청할 함수
 */
export const useAxios = (options, axiosInstnafce = defaultAxios) => {
  // 👉 상태 값
  const [state, setSate] = useState({
    loading: true,
    error: null,
    data: { status: 400 },
  });

  // 👉 비동기 통신 요청 트리거 값 - useEffect에서 감시 대상
  const [trigger, setTrigger] = useState(0);

  // 👉 useEffect - 감디 대상 있음
  useEffect(() => {
    axiosInstnafce(options)
      .then((data) => {
        setSate({
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setSate({ ...state, loading: false, error });
      });
  }, [trigger]);

  const refetch = () => {
    setSate({
      loading: true,
    });
    // ⭐️ 트리거 값 변경 - useEffect()에서 감시중이라  재실행
    setTrigger(Math.random() * 10);
  };

  // 👎 여기서도 삽집 .. {state, refetch } 로 반환하면 값이 전부 undefined임
  return { ...state, refetch };
};
