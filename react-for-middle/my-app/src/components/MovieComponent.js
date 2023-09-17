import PropTypes from "prop-types";

function Movie({ movieImg, title, summary, genres }) {
  return (
    <div>
      <img src={movieImg} alt={title} />
      <h2>{title}</h2>
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
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  // 👉 문자열 string형식이다!!
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
