import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedRupees = parseFloat(rupees);
    if (!isNaN(parsedRupees)) {
      // Example conversion rate: 1 Euro = 90 INR
      const convertedEuros = (parsedRupees / 90).toFixed(2);
      setEuros(convertedEuros);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ marginRight: '10px' }}>
          Indian Rupees:
          <input 
            type="number" 
            value={rupees} 
            onChange={(e) => setRupees(e.target.value)} 
            placeholder="Enter Amount in INR"
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
        </label>
        <button type="submit">Convert</button>
      </form>

      {euros !== null && (
        <div style={{ marginTop: '15px' }}>
          <strong>Converted Amount: €{euros}</strong>
        </div>
      )}
    </div>
  );
}

export default CurrencyConvertor;
