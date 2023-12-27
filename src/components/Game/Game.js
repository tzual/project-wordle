import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput.js';
import GuessResults from '../GuessResults/GuessResults.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  
  return <>
    <GuessResults guessHistory={guessHistory} />
    <GuessInput guessHistory={guessHistory} setGuessHistory={setGuessHistory} />
  </>;
}

export default Game;
