import { useState, useEffect } from "react";

function MovieApp() {
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
        <div>
          {movieData.map((item) => (
            <div key={item.id}>
              <img src={item.medium_cover_image} />
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <ul>
                {item.genres.map((g, idx) => (
                  <li key={idx}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieApp;
