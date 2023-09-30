import { useState, useEffect, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  /** 💬 Validation Chcek */
  if (onConfirm && typeof onConfirm !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;

  const confirmAction = () => {
    window.confirm(message) ? onConfirm() : onCancel();
  };
  return confirmAction;
};

function App() {
  const deleteWorld = () => console.log("Deleteting the world");
  const abort = () => console.log("Aborted!");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default App;
