import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, movieImg, title, summary, genres }) {
  return (
    <div>
      <img src={movieImg} alt={title} />
      {/**해당 방법은 화면이 깜박거리는 문제가 있음 */}
      {/* <h2><a href="/moive">{title}</a></h2>  */}
      <h2>
        {/** 💬 Link를 사용하면 화면이 깜박이지 않고 이동 가능함 */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g, idx) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  // 👉 문자열 string형식이다!!
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
