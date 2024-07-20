import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get('email'),
    };

    console.log({
      email: userData.email,
    });

    try {
      const response = await axios.post('http://localhost:5000/', userData);
      console.log('Response from backend:', response.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '1em 0' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5em' }}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.5em',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            autoComplete="email"
            autoFocus
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75em',
              marginTop: '1em',
              marginBottom: '1em',
              backgroundColor: '#3f51b5',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1em',
              fontWeight: 'bold',
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
