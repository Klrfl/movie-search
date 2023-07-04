import { useRef } from "react";

export default function MovieForm({ onSearch }) {
  const movieInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(movieInput.current.value);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="put url here" ref={movieInput} />
      <button type="submit">Submit</button>
    </form>
  );
}
