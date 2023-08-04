import { useEffect, useRef, useState } from "react";

import "./MovieForm.css";

const movieNames = [
  "Fast and Furious",
  "Casablanca",
  "No Country for Old Men",
  "Schindler's list",
  "Warkop DKI",
  "The Matrix",
  "James Bond",
  "The Godfather",
  "Gladiator",
  "Saving Private Ryan",
  "Snake on a Plane",
];

export default function MovieForm({ onSearch }) {
  const movieInput = useRef(null);
  const [movieSuggestion, setMovieSuggestion] = useState(movieNames[0]);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(movieInput.current.value, adult);
  }

  useEffect(() => {
    setMovieSuggestion(
      movieNames[Math.floor(Math.random() * movieNames.length)]
    );
  }, []);

  return (
    <form className="query-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="main-query">
        <input
          type="text"
          placeholder={movieSuggestion}
          className="query-input"
          ref={movieInput}
        />
        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </div>
    </form>
  );
}
