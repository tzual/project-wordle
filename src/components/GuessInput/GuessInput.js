import React from "react";

function GuessInput() {
  const [nextGuess, setNextGuess] = React.useState("");

  function handleNextGuessChange(event) {
    const nextGuessCaps = event.target.value.toUpperCase();
    setNextGuess(nextGuessCaps);
  }

  function handleGuessInputSubmit(event) {
    event.preventDefault();
    console.log("Guess submitted:", nextGuess);
    setNextGuess("");
  }

  return (
    <form onSubmit={handleGuessInputSubmit}>
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
