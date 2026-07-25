import React from 'react';

function Guest() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', marginTop: '20px' }}>
      <h2>Welcome Guest User!</h2>
      <p>Here are the currently available flight details:</p>
      <ul>
        <li>Flight 101: New York to London - $450</li>
        <li>Flight 202: Tokyo to San Francisco - $800</li>
        <li>Flight 303: Paris to Dubai - $500</li>
      </ul>
      <p style={{ color: 'red' }}>Please Login to book tickets.</p>
    </div>
  );
}

export default Guest;
