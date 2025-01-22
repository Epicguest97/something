import { useState, useEffect } from 'react';
import './App.css';

function App() {

  // Use useEffect to log the IP when the component mounts
  useEffect(() => {
    // Call the serverless function to log the IP
    fetch('/api/log-ip')
      .then(response => response.json())
      .then(data => console.log('Logged IP:', data.ip))
      .catch(error => console.error('Error logging IP:', error));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <div>
        This is a test
      </div>
    </>
  );
}

export default App;