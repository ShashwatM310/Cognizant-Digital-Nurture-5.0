import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    alert('Hello, you incremented the counter!');
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = (e) => {
    alert('I was clicked (Synthetic Event Type: ' + e.type + ')');
  };

  return (
    <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h2>Counter Component</h2>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement} style={{ marginRight: '10px' }}>Increment & Say Hello</button>
      <button onClick={handleDecrement} style={{ marginRight: '10px' }}>Decrement</button>
      
      <br /><br />
      <button onClick={() => handleWelcome('Welcome!')} style={{ marginRight: '10px' }}>Say Welcome</button>
      <button onClick={handleSyntheticEvent}>Synthetic OnPress</button>
    </div>
  );
}

export default Counter;
