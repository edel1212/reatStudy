import { useState, useEffect } from "react";
import Movie from "../components/MovieComponent";

function Home() {
  const [loading, setLoading] = useState(true);

  const [movieData, setMovieData] = useState([]);

  // ✅ async을 2번 중첩 사용하여 코드르 더 직관 적이게 함
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
      ).catch((e) => console.log(e))
    ).json();
    setMovieData(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // ✅ 처음엔 빈 [] 찍힌 후 Effect 실행 후 재랜더링 되어 값이 찍힘
  console.log(movieData);

  return (
    <div>
      {loading ? (
        <span>Loading....</span>
      ) : (
        movieData.map((item) => (
          // ⭐️ 내가 틀렸던 부분 .. Object로 넘기면 알아서 파싱될거라 생각함 .. 아니었다 .. key값은 맞춰서 넘겨줘야함..
          <Movie
            key={item.id}
            movieImg={item.medium_cover_image}
            title={item.title}
            summary={item.summary}
            genres={item.genres}
          />
        ))
      )}
    </div>
  );
}

export default Home;
