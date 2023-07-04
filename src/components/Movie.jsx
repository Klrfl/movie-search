import "./Movie.css";

export default function Movie({ movie }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <h2>{movie.title}</h2>
        <p>Released on {movie.release_date}</p>
        <div className="movie__vote-and-popularity">
          <p>{movie.popularity}</p>
          <p>{movie.vote_average}</p>
        </div>
      </div>

      <figure className="movie__image">
        <img
          src={`${import.meta.env.VITE_REACT_APP_BASE_IMG_URL}${
            movie.poster_path
          }`}
          alt={`Poster for ${movie.title}`}
        />
      </figure>
    </div>
  );
}
