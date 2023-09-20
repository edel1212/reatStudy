// 💬 Router에서 :key 값으로 넘긴 값을 받아올 수 있음 - Object형태
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  // 👉 Router에서 넘긴 key값
  const { id } = useParams();
  // 초기 세팅
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  }, []);

  return <h1>Detail</h1>;
}
export default Detail;
