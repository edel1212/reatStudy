import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, movieImg, year, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={movieImg} alt={title} className={styles.movie__img} />
      {/**해당 방법은 화면이 깜박거리는 문제가 있음 */}
      {/* <h2><a href="/moive">{title}</a></h2>  */}
      <h2 className={styles.movie__title}>
        {/** 💬 Link를 사용하면 화면이 깜박이지 않고 이동 가능함 */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
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
