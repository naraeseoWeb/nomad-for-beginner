import propTypes from 'prop-types';

const Movie = ({ title, genre, nation, year }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>장르: {genre}</p>
      <p>제작국가: {nation}</p>
      <p>개봉연도: {year}</p>
    </>
  );
};

Movie.propTypes = {
  title: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  nation: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
};

export default Movie;
