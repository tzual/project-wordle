import React from "react";

function GuessInput({ guessHistory, setGuessHistory }) {
  const [nextGuess, setNextGuess] = React.useState("");

  function handleNextGuessChange(event) {
    const nextGuessCaps = event.target.value.toUpperCase();
    setNextGuess(nextGuessCaps);
  }

  function handleGuessInputSubmit(event) {
    event.preventDefault();
    const nextGuessHistory = [
      ...guessHistory,
      {
        value: nextGuess,
        id: crypto.randomUUID(),
      },
    ];
    console.log("Guess history:", nextGuessHistory);
    setGuessHistory(nextGuessHistory);
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
