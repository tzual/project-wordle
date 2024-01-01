import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessField from '../GuessField/GuessField.js';
import GuessResults from '../GuessResults/GuessResults.js';
import { checkGuess } from "../../game-helpers.js";
import GameWonBanner from '../GameWonBanner/GameWonBanner.js';
import GameLostBanner from '../GameLostBanner/GameLostBanner.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');
  const guessHistoryStatus = guessHistory.map((guess) =>
    checkGuess(guess, answer)
  );

  function handleGuessSubmit(nextGuess) {
    const nextGuessHistory = [...guessHistory, nextGuess];
    setGuessHistory(nextGuessHistory);
    if (nextGuess === answer) {
      setGameStatus("won");
    } else if (nextGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guessHistoryStatus={guessHistoryStatus} />
      {{
        playing: <GuessField handleGuessSubmit={handleGuessSubmit} />,
        won: <GameWonBanner guessesAmount={guessHistory.length} />,
        lost: <GameLostBanner answer={answer} />
      }[gameStatus]}
    </>
  );
}

export default Game;
