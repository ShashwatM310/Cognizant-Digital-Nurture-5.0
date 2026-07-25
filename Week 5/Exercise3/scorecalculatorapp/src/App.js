import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name="Steeve" School="Nehru High School" Total={284} Goal={3} />
    </div>
  );
}

export default App;
