import MovieForm from "./components/MovieForm";
import Movie from "./components/Movie";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [movieArray, setMovieArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    "Please search for a movie."
  );

  async function getSearchString(inputString) {
    try {
      const request = await fetch(
        `${
          import.meta.env.VITE_BASE_API_URL
        }/search/movie?query=${inputString}&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const response = await request.json();
      console.log(response);
      setMovieArray(response.results);
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error.message);
    }
  }

  return (
    <>
      <header>
        <div className="logos">
          <img
            src={reactLogo}
            className="logo logo--react"
            width="40"
            height="40"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="logo logo--vite"
            width="40"
            height="40"
            alt="Vite logo"
          />
        </div>

        <h1>React Movie Search</h1>
        <p>
          I am bored, so I decided to learn React and make this movie search
          app.
        </p>
        <MovieForm onSearch={getSearchString}></MovieForm>
      </header>

      <main>
        <h2>Search results</h2>

        <div className="movies">
          {movieArray.length === 0 && <p>{errorMessage}</p>}
          {movieArray.map((movie) => (
            <Movie key={movie.id} movie={movie}></Movie>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
