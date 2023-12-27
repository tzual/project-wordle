import React from 'react';
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessResults({ guessHistory }) {
  const guessRows = range(NUM_OF_GUESSES_ALLOWED);
  const guessCells = range(5);
  
  return (
    <div className="guess-results">
      {guessRows.map((guessIndex) => (
        <p key={guessIndex} className="guess">
          {guessCells.map((letterIndex) => (
            <span key={letterIndex} className="cell">{guessHistory[guessIndex] &&
                guessHistory[guessIndex].value[letterIndex]}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
