import React from 'react';

function GameWonBanner({guessesAmount}) {
  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{' ' + guessesAmount} guesses</strong>.
    </p>
  </div>;
}

export default GameWonBanner;
