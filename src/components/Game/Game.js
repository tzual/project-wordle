import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput.js';
import GuessResults from '../GuessResults/GuessResults.js';
import { checkGuess } from "../../game-helpers.js";
import GameWonBanner from '../GameWonBanner/GameWonBanner.js';
import GameLostBanner from '../GameLostBanner/GameLostBanner.js';

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

  return (
    <>
      <GuessResults guessHistoryStatus={guessHistoryStatus} />
      {{
        playing: (
          <GuessInput
            guessHistory={guessHistory}
            setGuessHistory={setGuessHistory}
            answer={answer}
            setGameStatus={setGameStatus}
          />
        ),
        won: <GameWonBanner guessesAmount={guessHistory.length} />,
        lost: <GameLostBanner answer={answer} />
      }[gameStatus]}
    </>
  );
}

export default Game;
