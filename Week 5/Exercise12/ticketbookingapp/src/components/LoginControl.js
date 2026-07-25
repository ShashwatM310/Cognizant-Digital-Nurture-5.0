import React, { useState } from 'react';
import Guest from './Guest';
import User from './User';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <button onClick={handleLogoutClick} style={buttonStyle}>Logout</button>;
  } else {
    button = <button onClick={handleLoginClick} style={buttonStyle}>Login</button>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {button}
      
      {/* Conditional Rendering based on state */}
      {isLoggedIn ? <User /> : <Guest />}
    </div>
  );
}

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#008CBA',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default LoginControl;
