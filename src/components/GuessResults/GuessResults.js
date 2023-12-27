import React from 'react';

function GuessResults({guessHistory}) {
  return <ul className="guess-results">
    {guessHistory.map((guess) => (
      <li 
        key={guess.id}>{guess.value}
        class="guess"
      </li>
    ))}
  </ul>;
}

export default GuessResults;
