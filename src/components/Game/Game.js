import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput.js';
import GuessResults from '../GuessResults/GuessResults.js';
import { checkGuess } from "../../game-helpers.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  const guessHistoryStatus = guessHistory.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <GuessResults guessHistoryStatus={guessHistoryStatus} />
      <GuessInput
        guessHistory={guessHistory}
        setGuessHistory={setGuessHistory}
      />
    </>
  );
}

export default Game;
