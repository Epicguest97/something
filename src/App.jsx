import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Random log to confirm the fetch call is being made
    console.log("Fetching IP address...");

    fetch('/api/log-api.js')
      .then(response => response.json())
      .then(data => console.log('Logged IP:', data.ip))
      .catch(error => console.error('Error logging IP:', error));
  }, []);

  return (
    <>
      <div>
        This is a test
      </div>
    </>
  );
}

export default App;