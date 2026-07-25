import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    { id: 1, title: 'Java FSE', status: 'ongoing', duration: '12 Weeks' },
    { id: 2, title: 'React Masters', status: 'completed', duration: '8 Weeks' },
  ];

  return (
    <div>
      {cohorts.map(c => <CohortDetails key={c.id} cohort={c} />)}
    </div>
  );
}

export default App;
