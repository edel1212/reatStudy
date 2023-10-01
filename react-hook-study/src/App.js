import { useNotification } from "./functionalModule/UseNotification";

function App() {
  const startNotification = useNotification("안녕", { body: "알림이야" });
  return (
    <div className="App">
      <button onClick={startNotification}>알림 울리게</button>
    </div>
  );
}

export default App;
