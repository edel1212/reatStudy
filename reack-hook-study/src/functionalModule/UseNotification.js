export const useNotification = (title, options) => {
  // 👉 지원하지 않는다면 알림을 하지 않음
  if (!("Notification" in window)) return;
  const fireNotif = () => {
    // 💬 허가하지 않을 경우
    if (Notification.permission !== "granted") {
      Notification.permission().then((permission) => {
        if (Notification.permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      }); //permission
    } else {
      new Notification(title, options);
    } // if - else
  };
  return fireNotif;
};
