// PARTS
import Movie from "./Movie";

function Movies({ movies = [] }) {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found!</h4>
      )}
    </div>
  );
}

export default Movies;
