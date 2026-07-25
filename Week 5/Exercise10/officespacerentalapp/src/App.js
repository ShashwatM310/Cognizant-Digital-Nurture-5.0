import React from 'react';

function App() {
  const officeSpaces = [
    {
      id: 1,
      Name: 'Cognizant Chennai',
      Rent: 45000,
      Address: 'Chennai, Tamil Nadu'
    },
    {
      id: 2,
      Name: 'Cognizant Pune',
      Rent: 75000,
      Address: 'Pune, Maharashtra'
    },
    {
      id: 3,
      Name: 'Cognizant Bangalore',
      Rent: 55000,
      Address: 'Bangalore, Karnataka'
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Office Space, at Affordable Range</h1>
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
        alt="Office Space" 
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} 
      />
      
      <h2>Available Office Spaces</h2>
      {officeSpaces.map(office => {
        const rentColor = office.Rent <= 60000 ? 'red' : 'green';
        
        return (
          <div key={office.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '5px' }}>
            <h3>{office.Name}</h3>
            <p><strong>Address:</strong> {office.Address}</p>
            <p style={{ color: rentColor, fontWeight: 'bold' }}>
              Rent: ₹{office.Rent}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
