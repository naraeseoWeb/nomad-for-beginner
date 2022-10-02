import { useEffect, useState } from 'react';
import Movie from './Movie';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888`
      )
    ).json();
    setMovies(json.movieListResult.movieList);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log('데이터', movies);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              title={movie.movieNm}
              genre={movie.genreAlt}
              nation={movie.nationAlt}
              year={movie.prdtYear}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
