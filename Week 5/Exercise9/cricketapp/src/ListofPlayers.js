import React from 'react';

const ListofPlayers = () => {
    const players = [
        { name: 'Sachin Tendulkar', score: 100 },
        { name: 'Virat Kohli', score: 82 },
        { name: 'MS Dhoni', score: 65 },
        { name: 'Rohit Sharma', score: 110 },
        { name: 'Yuvraj Singh', score: 55 },
        { name: 'Suresh Raina', score: 45 },
        { name: 'Virender Sehwag', score: 95 },
        { name: 'Gautam Gambhir', score: 60 },
        { name: 'Rahul Dravid', score: 75 },
        { name: 'Sourav Ganguly', score: 68 },
        { name: 'VVS Laxman', score: 80 }
    ];

    const playersBelow70 = players.filter(player => player.score <= 70);

    return (
        <div>
            <h2>List of All Players</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name} - Score: {player.score}</li>
                ))}
            </ul>
            
            <h2>Players with Scores Below 70</h2>
            <ul>
                {playersBelow70.map((player, index) => (
                    <li key={index}>{player.name} - Score: {player.score}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
