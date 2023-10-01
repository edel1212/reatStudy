import { useAxios } from "./useAxiosModule/UseAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json ",
  });
  return (
    <div className="App">
      {/* React는 Object자체는 화면에 표출하지 못함 에러가 발생함!!
        - 에러 발생 코드 : <div>Status: {data}</div>
        - Error Msg  : Objects are not valid as a React child (found: object with keys...
        - 해결방법 : key를 넣어서 필요 데이터를 뿌려주자!!
      */}
      <div>Status: {data.status}</div>
      <h2>{loading ? "로딩중" : "로딩완료!!"}</h2>
      <button onClick={refetch}>다시 확인!</button>
    </div>
  );
}

export default App;
