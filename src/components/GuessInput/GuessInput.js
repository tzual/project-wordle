import React from "react";

function GuessInput({ handleGuessSubmit }) {
  const [nextGuess, setNextGuess] = React.useState("");

  function handleNextGuessChange(event) {
    const nextGuessCaps = event.target.value.toUpperCase();
    setNextGuess(nextGuessCaps);
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setNextGuess("");
      handleGuessSubmit(nextGuess);
    }} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={nextGuess}
        onChange={handleNextGuessChange}
        pattern="[A-Z]{5,5}"
      />
    </form>
  );
}

export default GuessInput;
