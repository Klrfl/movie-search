import "./Movie.css";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Movie({ movie }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function seeDetails() {
    setModalIsOpen(true);
  }

  function handleModalIsClosed() {
    setModalIsOpen(false);
  }

  function formatDate(releaseDate) {
    let returnDate;
    try {
      const date = new Date(releaseDate);
      const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
      };

      returnDate = new Intl.DateTimeFormat("en", options).format(date);
    } catch (err) {
      console.log(returnDate);
      console.error(err.message);
    }

    return returnDate;
  }

  return (
    <div className="movie">
      <div className="movie__data">
        <h3 className="movie__title">{movie.title}</h3>
        <p className="movie__original-title">{movie.original_title}</p>
        <p>
          Released on {formatDate(movie.release_date)}
          {/* {Intl.DateTimeFormat("en", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(movie.release_date))} */}
        </p>

        <div className="movie__vote-and-popularity">
          <p>{movie.popularity}</p>
          <p>{movie.vote_average}</p>
        </div>

        <button onClick={seeDetails} className="btn">
          Details
        </button>

        {/* details box */}
        <Modal isOpen={modalIsOpen} hasClosed={handleModalIsClosed}>
          <div className="movie__details-content">
            <div className="movie__details-text">
              <h3 className="movie__title">{movie.title}</h3>
              <p className="movie__original-title">{movie.original_title}</p>

              <div className="movie_vote-and-popularity">
                <p>{movie.popularity}</p>
                <p>{movie.vote_average}</p>
              </div>

              <p className="movie__overview">{movie.overview}</p>
            </div>

            <figure className="movie__details-image">
              <img
                src={`${import.meta.env.VITE_BASE_IMG_URL}${movie.poster_path}`}
                alt={`Movie poster for ${movie.title}`}
              />
            </figure>
          </div>
        </Modal>
      </div>

      <figure className="movie__image">
        <img
          src={`${import.meta.env.VITE_BASE_IMG_URL}${movie.poster_path}`}
          alt={`Poster for ${movie.title}`}
          width="500"
        />
      </figure>
    </div>
  );
}
