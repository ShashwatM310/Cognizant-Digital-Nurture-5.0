import React from 'react';

function User() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e6ffe6', border: '1px solid #b3ffb3', marginTop: '20px' }}>
      <h2>Welcome User!</h2>
      <p>You have successfully logged in.</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Book Tickets Now
      </button>
    </div>
  );
}

export default User;
