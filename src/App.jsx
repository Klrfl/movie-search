import MovieForm from "./components/MovieForm";
import Movie from "./components/Movie";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [movieArray, setMovieArray] = useState([]);

  async function getSearchString(inputString) {
    const request = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputString}&api_key=45960a70cb9432c49c8201ac69b90f8a`
    );
    const response = await request.json();
    console.log(response);
    setMovieArray(response.results);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <header>
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
          {movieArray.length === 0 && <p>Please search for a movie</p>}
          {movieArray.map((movie) => (
            <Movie key={movie.id} movie={movie}></Movie>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
