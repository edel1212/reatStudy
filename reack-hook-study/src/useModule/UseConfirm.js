export const useConfirm = (message = "", onConfirm, onCancel) => {
  /** 💬 Validation Chcek */
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (!onCancel || typeof onCancel !== "function") return;

  const confirmAction = () => {
    window.confirm(message) ? onConfirm() : onCancel();
  };
  return confirmAction;
};
