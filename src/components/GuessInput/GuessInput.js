import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessInput({ guessHistory, setGuessHistory, answer, setGameStatus }) {
  const [nextGuess, setNextGuess] = React.useState("");

  function handleNextGuessChange(event) {
    const nextGuessCaps = event.target.value.toUpperCase();
    setNextGuess(nextGuessCaps);
  }

  function handleGuessInputSubmit(event) {
    event.preventDefault();
    const nextGuessHistory = [...guessHistory, nextGuess];
    setGuessHistory(nextGuessHistory);
    setNextGuess("");
    if (nextGuess === answer) {
      setGameStatus("won");
    } else if (nextGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
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
