/**
 * 💬 beforeunload 활용 방법
 *
 * window.onbeforeunload = function() {
 *  fetch('/logger', {
 *       method: 'POST',
 *       body: new URLSearchParams({agent: 'agent-info', logdata: 'data'}),
 *       keepalive: true
 *   });
 * };
 *
 * beforeunload 이벤트 핸들러에서 특정 작업을 실행할 경우
 * 해당 작업이 윈도우가 닫힌 뒤에도 실행될 수 있도록 해야 할 필요가 있습니다.
 * 이런 경우를 위해 sendBeacon()과 같은 메서드를 이용해 윈도우가 닫힌 후에도
 * 실행 완료를 보장할 수 있도록 하거나, 비동기 Fetch API에 "keepalive"와 같은 속성을
 * 사용해서 비동기 호출이 완료될 수 있도록 할 수 있습니다.
 *
 * - Fetch API에 keepalive 속성을 추가
 * - 단, 전송할 수 있는 최대 데이터는 64Kb 이하로 제한됩니다.
 */

export const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    // ✅ 필수!! 없으면 메세지가 안 뜸 어떠한 값을 넣어도 상관은 없음 무시되기 때문임 단 존재는 해야한다.
    e.returnValue = "";
  };
  // 👉 화면이 닫힐 경우 경고 메세지
  const enablePrevent = () => (window.onbeforeunload = listener);
  // 👉 경고 메세지 제거
  const disablePrevent = () => (window.onbeforeunload = null);
  return { enablePrevent, disablePrevent };
};
