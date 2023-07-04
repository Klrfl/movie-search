import MovieForm from "./components/MovieForm";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function getSearchString(string) {
    console.log(string);
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
        <MovieForm onSearch={getSearchString}></MovieForm>
      </header>
      <main>
        <h2>Movies</h2>
        <p>Movies will be displayed here. currently under construction</p>
      </main>
    </>
  );
}

export default App;
