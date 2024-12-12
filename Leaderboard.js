import React, { useState } from "react";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [playerScore, setPlayerScore] = useState("");

  const addPlayer = () => {
    if (playerName && playerScore) {
      const newPlayer = { name: playerName, score: parseInt(playerScore) };
      setPlayers([...players, newPlayer]);
      setPlayerName("");
      setPlayerScore("");
    }
  };

  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  return (
    <div>
      <h2>Leaderboard</h2>
      <input
        type="text"
        placeholder="Player Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Score"
        value={playerScore}
        onChange={(e) => setPlayerScore(e.target.value)}
      />
      <button onClick={addPlayer}>Add Player</button>

      <ul>
        {sortedPlayers.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
