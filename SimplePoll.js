import React, { useState } from 'react';

const SimplePoll = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [results, setResults] = useState({
    Red: 0,
    Blue: 0,
    Green: 0,
    Yellow: 0
  });

  const vote = (color) => {
    if (!hasVoted) {
      setResults({
        ...results,
        [color]: results[color] + 1
      });
      setHasVoted(true);
    }
  };

  return (
    <div>
      <h2>Pick your favorite color!</h2>
      
      <div>
        {Object.keys(results).map(color => (
          <div key={color}>
            <button onClick={() => vote(color)} disabled={hasVoted}>
              {color}
            </button>
            {hasVoted && <span> {results[color]} votes</span>}
          </div>
        ))}
      </div>

      {hasVoted && <p>Thanks for voting!</p>}
    </div>
  );
};

export default SimplePoll;