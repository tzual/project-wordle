import React from 'react';

function GameLostBanner({answer}) {
  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>;
}

export default GameLostBanner;
