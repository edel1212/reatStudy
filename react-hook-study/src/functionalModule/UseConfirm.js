export const useConfirm = (message = "", onConfirm, onCancel) => {
  /** 💬 Validation Chcek */
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (!onCancel || typeof onCancel !== "function") return;

  return () => {
    window.confirm(message) ? onConfirm() : onCancel();
  };
};
