import MovieForm from "./components/MovieForm";
import Movie from "./components/Movie";
import OpenDialog from "./components/OpenDialog";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [movieArray, setMovieArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    "Please search for a movie."
  );

  async function getSearchString(inputString, adult) {
    try {
      const request = await fetch(
        `${
          import.meta.env.VITE_BASE_API_URL
        }/search/movie?query=${inputString}&include_adult=${adult}&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const response = await request.json();
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
        <OpenDialog>
          <h2>Klrfl Movie Search</h2>
          <p>
            This is my second ever React app I have ever made, scaffolded with
            Vite. I used a free movie API from{" "}
            <a
              href="https://developer.themoviedb.org/reference/intro/getting-started"
              target="_blank"
              rel="noreferrer">
              The Movie Database
            </a>
            , you should check it out.
          </p>
          <p>
            Check out this{" "}
            <a
              href="https://github.com/Klrfl/movie-search"
              target="_blank"
              rel="noreferrer">
              project&apos;s source code
            </a>{" "}
            on GitHub.
          </p>
        </OpenDialog>
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
