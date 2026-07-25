import React from 'react';

const IndianPlayers = () => {
    const players = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];
    const [first, second, third, fourth, fifth, sixth] = players;

    const T20players = ['First', 'Second', 'Third'];
    const RanjiTrophyPlayers = ['Fourth', 'Fifth', 'Sixth'];
    
    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
        <div>
            <h2>Odd Players</h2>
            <ul>
                <li>{first}</li>
                <li>{third}</li>
                <li>{fifth}</li>
            </ul>

            <h2>Even Players</h2>
            <ul>
                <li>{second}</li>
                <li>{fourth}</li>
                <li>{sixth}</li>
            </ul>

            <h2>Merged Players</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndianPlayers;
