import { useRef } from "react";

import "./MovieForm.css";
export default function MovieForm({ onSearch }) {
  const movieInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(movieInput.current.value);
  }

  return (
    <form className="query-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="put url here"
        className="query-input"
        ref={movieInput}
      />
      <button type="submit" className="btn btn--submit">
        Submit
      </button>
    </form>
  );
}
